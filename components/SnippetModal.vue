<template>
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-screen"
  >
    <div
      id="snippet-modal-background"
      style="filter: blur(6px); opacity: 0.85"
      class="w-full h-full mx-auto bg-primary"
    ></div>
    <div>
      <div
        style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
        class="absolute px-4 py-4 overflow-auto rounded-lg shadow-2xl md:w-7/12 sm:w-11/12 bg-secondary text-primary"
      >
        <h4>Pulsing Button</h4>
        <p v-if="snippet">
          {{ snippet.snippet }}
        </p>
        <div
          class="absolute top-0 right-0 mt-4 mr-6 text-primary hover:text-accent"
        >
          <CopyIcon class="w-6 h-6 text-current cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CopyIcon from '@/assets/icons/copy-outline.svg?inline'

export default {
  props: {
    snippet: {
      type: Object,
      required: true,
    },
  },
  components: {
    CopyIcon,
  },

  mounted() {
    window.onclick = (event) => {
      const modalBackground = document.getElementById(
        'snippet-modal-background'
      )
      if (event.target === modalBackground) {
        this.$emit('closeSnippetModal')
      }
    }
  },
}
</script>
