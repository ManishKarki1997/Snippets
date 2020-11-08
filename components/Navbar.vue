<template>
  <header class="bg-accent flex items-center h-16 shadow-xl text-primary">
    <nav class="container flex items-center justify-between">
      <h1>
        <span class="text-lg">CSS</span>
        <span class="text-gray-300">snippets</span>
      </h1>
      <ul class="flex items-center justify-between">
        <li v-if="theme === 'dark'">
          <SunIcon
            @click="toggleTheme"
            class="w-6 h-6 fill-current text-current cursor-pointer hover:text-blue-900 transition-all duration-500"
          />
        </li>
        <li v-if="theme === 'light'">
          <MoonIcon
            @click="toggleTheme"
            class="w-6 h-6 fill-current text-current cursor-pointer hover:text-blue-900 transition-all duration-500"
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
