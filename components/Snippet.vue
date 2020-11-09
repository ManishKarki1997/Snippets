<template>
  <div
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
        class="px-4 py-1 transition-all duration-300 rounded bg-primary hover:shadow text-accent"
      >
        <p>button</p>
      </div>
      <div
        class="px-4 py-1 transition-all duration-300 rounded bg-primary hover:shadow text-accent"
      >
        <p>card</p>
      </div>
      <div
        class="px-4 py-1 transition-all duration-300 rounded bg-primary hover:shadow text-accent"
      >
        <p>avatar</p>
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
