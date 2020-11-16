<template>
  <div
    tabindex="0"
    class="mb-2 overflow-hidden transition-all duration-300 rounded-lg shadow-xl cursor-pointer h-36 bg-secondary hover:shadow-xl group"
    @click="viewSnippet(snippet)"
  >
    <div class="w-full h-56">
      <img
        v-shared-element:[`${snippet.slug}-image-${snippet.demo_image}`]="{
          includeChildren: true,
          duration: '500ms',
        }"
        class="object-cover w-full h-full"
        :src="snippet.demo_image"
        alt="Snippet Image"
      />
    </div>
    <div class="px-4 mt-4 mb-4">
      <p
        v-shared-element:[`${snippet.slug}-title-${snippet.demo_image}`]="{
          includeChildren: true,
        }"
        class="-mt-1 text-lg font-bold tracking-wide"
      >
        {{ snippet.title }}
      </p>
    </div>
    <div class="flex items-center w-full px-4">
      <div
        v-for="tag in snippet.tags"
        :key="snippet.slug + '-' + tag"
        v-shared-element:[`snippet-tag-button-${tag}`]="{
          includeChildren: true,
          duration: '400ms',
        }"
        class="px-2 py-1 mb-2 mr-2 transition-all duration-300 rounded text-accent"
      >
        <button class="cursor-pointer">#{{ tag }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    snippet: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      snippetImage: 1001,
    }
  },

  methods: {
    viewSnippet(snippet) {
      this.$router.push(`/snippet/${snippet.slug}`)
    },
  },
}
</script>
