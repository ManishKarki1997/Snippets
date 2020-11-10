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

        <vue-code-highlight
          style="max-height: 80vh; height: 60vh"
          :language="snippet.language"
        >
          <pre>
           {{ snippet.snippet }}
            </pre
          >
        </vue-code-highlight>

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
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'

export default {
  props: {
    snippet: {
      type: Object,
      required: true,
    },
  },
  components: {
    CopyIcon,
    VueCodeHighlight,
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

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono&display=swap');

pre {
  border-radius: 5px;
  background-color: #2d3748 !important;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
pre::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
code,
span {
  font-family: 'DM Mono', monospace;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 24px;
  letter-spacing: -0.2px;
}
span.token.operator {
  background: transparent !important;
}

code[class*='language-'] {
  text-shadow: none;
}
</style>
