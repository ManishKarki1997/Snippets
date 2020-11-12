<template>
  <header class="flex items-center h-16 shadow-xl bg-accent text-primary">
    <nav class="container flex items-center justify-between">
      <nuxt-link to="/">
        <h1>
          <span class="text-lg text-gray-300">CSS</span>
          <span class="text-gray-300">snippets</span>
        </h1>
      </nuxt-link>
      <ul class="flex items-center justify-between text-white">
        <li v-if="theme === 'dark'">
          <SunIcon
            role="button"
            tabindex="0"
            class="w-6 h-6 text-current transition-all duration-500 cursor-pointer fill-current hover:text-gray-500"
            @click="toggleTheme"
          />
        </li>
        <li v-if="theme === 'light'">
          <MoonIcon
            role="button"
            tabindex="0"
            class="w-6 h-6 text-current transition-all duration-500 cursor-pointer fill-current hover:text-gray-500"
            @click="toggleTheme"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SunIcon from '~/assets/icons/sun-outline.svg?inline'
import MoonIcon from '~/assets/icons/moon-outline.svg?inline'
export default {
  components: {
    SunIcon,
    MoonIcon,
  },
  data() {
    return {
      theme: '',
    }
  },
  mounted() {
    if (process.browser) {
      const theme = localStorage.getItem('css-snippets-theme')

      if (!theme) {
        this.theme = 'light'
      } else {
        this.theme = theme
        window.document.body.classList.add(this.theme)
      }
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'

      if (process.browser) {
        localStorage.setItem('css-snippets-theme', this.theme)
        window.document.body.classList.add(this.theme)
        window.document.body.classList.remove(
          this.theme === 'dark' ? 'light' : 'dark'
        )
      }
    },
  },
}
</script>
