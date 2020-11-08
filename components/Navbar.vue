<template>
  <header class="flex items-center h-16 shadow-xl bg-blue-700 text-white">
    <nav class="container flex items-center justify-between">
      <h1>
        <span class="text-lg">CSS</span>
        <span class="text-gray-300">snippets</span>
      </h1>
      <ul class="flex items-center justify-between">
        <li>
          <SunIcon
            class="w-6 h-6 fill-current text-current cursor-pointer hover:text-blue-900 transition-all duration-500"
          />
        </li>
        <li>
          <MoonIcon
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
}
</script>
