<template>
  <div
    style="height: calc((100vh - 4rem) / 2)"
    class="bg-accent w-full px-4 py-4"
  >
    <div class="container">
      <div class="text-center">
        <h3 class="font-bold lg:text-6xl text-4xl md:text-5xl text-opposite">
          CSS Snippets
        </h3>
        <p class="text-opposite mt-6">
          Free and ready to use CSS snippets for generic html components.
        </p>
        <div
          class="relative w-6/12 mx-auto bg-secondary shadow-xl hover:shadow-2xl mt-24 rounded flex items-center justify-evenly transition-all duration-300"
        >
          <SearchIcon
            class="absolute left-0 top-0 mt-5 text-secondary ml-4 fill-current w-6 h-6"
          />
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search for a component"
            class="rounded bg-secondary pr-4 pl-12 py-4 w-full text-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from 'assets/icons/search-outline.svg?inline'
export default {
  components: {
    SearchIcon,
  },
}
</script>
