<template>
  <div
    tabindex="0"
    class="mb-2 overflow-hidden transition-all duration-300 rounded-lg shadow cursor-pointer h-36 bg-secondary hover:shadow-xl group"
    @click="viewSnippet(snippetImage)"
  >
    <div class="w-full h-64">
      <img
        v-shared-element:[`image-${snippetImage}`]="{
          includeChildren: true,
          duration: '500ms',
        }"
        class="object-cover w-full h-full"
        :src="`https://picsum.photos/id/${snippetImage - 1}/200/300`"
        alt="Snippet Image"
      />
    </div>
    <div class="px-4 my-4">
      <h4
        v-shared-element:[`snippet-title-${snippetImage}`]="{
          includeChildren: true,
        }"
        class="-mt-1 text-xl font-bold tracking-wide"
      >
        Snippet
      </h4>
    </div>
    <div class="flex items-center justify-between w-full px-4 py-2">
      <div
        v-shared-element:[`snippet-tag-button-${snippetImage}`]="{
          includeChildren: true,
          duration: '400ms',
        }"
        class="px-2 py-1 mb-2 mr-2 transition-all duration-300 rounded text-accent"
      >
        <button class="cursor-pointer">#button</button>
      </div>
      <div
        v-shared-element:[`snippet-tag-card-${snippetImage}`]="{
          includeChildren: true,
          duration: '500ms',
        }"
        class="px-2 py-1 mb-2 mr-2 transition-all duration-300 rounded text-accent"
      >
        <button class="cursor-pointer">#card</button>
      </div>
      <div
        v-shared-element:[`snippet-tag-avatar-${snippetImage}`]="{
          includeChildren: true,
          duration: '600ms',
        }"
        class="px-2 py-1 mb-2 mr-2 transition-all duration-300 rounded text-accent"
      >
        <button class="cursor-pointer">#avatar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    snippetImage: {
      type: Number,
      required: true,
    },
  },

  methods: {
    viewSnippet(snippetImage) {
      this.$router.push(`/snippet/${snippetImage}`)
    },
  },
}
</script>
