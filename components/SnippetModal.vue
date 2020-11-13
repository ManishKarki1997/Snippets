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
          <pre v-if="snippet.language === 'js'">
           {{ snippet.snippet | formatJS }}
            </pre
          >
          <pre v-if="snippet.language === 'html'">
           {{ snippet.snippet | formatHTML }}
            </pre
          >
          <pre v-if="snippet.language === 'css'">
           {{ snippet.snippet | formatCSS }}
            </pre
          >
        </vue-code-highlight>

        <div
          class="absolute top-0 right-0 mt-4 mr-6 text-primary hover:text-accent"
        >
          <CopyIcon
            class="w-6 h-6 text-current cursor-pointer"
            @click="copySnippet"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import beautify from 'beautify'
import CopyIcon from '@/assets/icons/copy-outline.svg?inline'
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'

export default {
  components: {
    CopyIcon,
    VueCodeHighlight,
  },

  filters: {
    formatHTML(html) {
      if (!html) return ''
      return beautify(html, { format: 'html' })
    },
    formatCSS(css) {
      if (!css) return ''
      return beautify(css, { format: 'css' })
    },
    formatJS(js) {
      if (!js) return ''
      return beautify(js, { format: 'js' })
    },
  },
  props: {
    snippet: {
      type: Object,
      required: true,
    },
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
  methods: {
    copySnippet() {
      const snippetEl = document.querySelector('.original-snippet')
      const range = document.createRange()
      range.selectNode(snippetEl)
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
      document.execCommand('copy')
      window.getSelection().removeAllRanges()
      this.showNotification()
    },
    showNotification() {
      this.$store.commit('ADD_NOTIFICATION', {
        id: Math.random() * 200 + Date.now().toString(),
      })
    },
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
