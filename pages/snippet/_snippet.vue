<template>
  <div style="height: calc(100vh - 4rem)" class="w-full bg-primary">
    <div class="container flex w-full h-full">
      <div class="flex items-center justify-center w-5/12 bg-primary">
        <div
          style="height: 80vh"
          class="w-full overflow-hidden border border-gray-800 rounded shadow-xl"
        >
          <img
            v-shared-element:[`${snippet.slug}-image-${snippet.demo_image}`]="{
              includeChildren: true,
              duration: '500ms',
            }"
            class="object-cover w-full h-full rounded-lg"
            :src="snippet.demo_image"
            alt="Snippet Image"
          />
        </div>
      </div>
      <div class="w-7/12 px-4 py-10 bg-primary text-primary">
        <div class="w-full h-full px-6 py-6 rounded bg-secondary">
          <h4
            v-shared-element:[`${snippet.slug}-title-${snippet.demo_image}`]="{
              includeChildren: true,
            }"
            class="-mt-1 text-xl font-bold tracking-wide"
          >
            {{ snippet.title }}
          </h4>
          <vue-code-highlight language="html" class="h-64">
            <pre class="text-white">{{ snippet.html }}</pre>
          </vue-code-highlight>

          <p>
            {{ snippet.description }}
          </p>

          <div class="flex items-center my-6">
            <div
              class="flex items-center mr-4 overflow-hidden rounded text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon
                  class="w-5 h-5 text-current stroke-2"
                  @click="showSelectedSnippet('html')"
                />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
                @click="copySnippet('html')"
              >
                HTML
              </button>
            </div>

            <div
              class="flex items-center mr-4 overflow-hidden rounded bg-primary text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon
                  class="w-5 h-5 text-current stroke-2"
                  @click="showSelectedSnippet('css')"
                />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
                @click="copySnippet('css')"
              >
                CSS
              </button>
            </div>

            <div
              v-if="snippet.js"
              class="flex items-center mr-4 overflow-hidden rounded bg-primary text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon
                  class="w-5 h-5 text-current stroke-2"
                  @click="showSelectedSnippet('js')"
                />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
                @click="copySnippet('js')"
              >
                JS
              </button>
            </div>

            <div
              v-if="snippet.tailwind"
              class="flex items-center mr-4 overflow-hidden rounded bg-primary text-primary group"
            >
              <div
                class="h-full px-2 py-1 transition-all duration-300 transform -translate-x-20 rounded-sm cursor-pointer text-primary group-hover:translate-x-0 hover:text-accent"
              >
                <EyeIcon
                  class="w-5 h-5 text-current stroke-2"
                  @click="showSelectedSnippet('html')"
                />
              </div>
              <button
                class="flex items-center px-2 py-1 transition-all duration-300 transform -translate-x-5 group-hover:-translate-x-1 text-primary"
                @click="copySnippet('html')"
              >
                Tailwind
              </button>
            </div>
          </div>

          <div class="flex items-center w-full py-2 mt-6">
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
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <SnippetModal
        v-if="showSnippet"
        :snippet="selectedSnippet"
        @closeSnippetModal="closeSnippetModal"
      />
    </transition>

    <!-- to copy the original snippet, in proper formatted form, not parsed with highlight js. hide it from sight -->
    <pre class="absolute top-0 original-snippet" style="left: -99999px">
          {{ selectedSnippet ? selectedSnippet.snippet : '' }}
        </pre
    >
  </div>
</template>

<script>
import beautify from 'beautify'
import EyeIcon from '@/assets/icons/eye-outline.svg?inline'
import SnippetModal from '@/components/SnippetModal'

import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'

export default {
  components: {
    EyeIcon,
    SnippetModal,
    VueCodeHighlight,
  },
  filters: {
    formatCSS(css) {
      if (!css) return ''
      return beautify(css, { format: 'css' })
    },
    formatJS(js) {
      if (!js) return ''
      return beautify(js, { format: 'js' })
    },
    formatHTML(html) {
      if (!html) return ''
      return beautify(html, { format: 'html' })
    },
  },
  async asyncData({ $content, params }) {
    const snippets = await $content('snippets')
      .where({ slug: params.snippet })
      .fetch()
    return { snippet: snippets[0] }
  },
  data() {
    return {
      showSnippet: false,
      selectedSnippet: null,
      code: {
        javascript: `
        const http = require('http');

        const bodyParser = require('body-parser');

        http
        .createServer((req, res) => {
          bodyParser.parse(req, (error, body) => {
            res.end(body)
          })
        })
        .listen(3000)

         const http = require('http');

        const bodyParser = require('body-parser');

        http
        .createServer((req, res) => {
          bodyParser.parse(req, (error, body) => {
            res.end(body)
          })
        })
        .listen(3000)`,
        css: `
          .button{
            padding:4px 6px;
            border-radius:5px;
          }
        `,
        html: `
          <div>hello world</div>
          <p>what is up?</p>
        `,
      },
    }
  },
  methods: {
    showSelectedSnippet(language) {
      this.showSnippet = true
      this.selectedSnippet = {
        language,
        snippet: this.snippet[language],
      }
    },
    closeSnippetModal() {
      this.showSnippet = false
      this.selectedSnippet = null
    },
    copySnippet(language) {
      this.selectedSnippet = {
        language,
        snippet: this.code[language],
      }
      // wait like 50ms to set the "selectedSnippet"
      setTimeout(() => {
        const snippetEl = document.querySelector('.original-snippet')
        const range = document.createRange()
        range.selectNode(snippetEl)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
        this.showNotification()
      }, 50)
    },
    showNotification() {
      this.$store.commit('ADD_NOTIFICATION', {
        id: Math.random() * 200 + Date.now().toString(),
      })
    },
  },
}
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
