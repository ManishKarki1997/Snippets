<template>
  <div
    style="height: calc((100vh - 3rem) / 2)"
    class="w-full px-4 py-4 bg-accent"
  >
    <div class="container">
      <div class="text-center">
        <h3
          class="text-4xl font-bold tracking-wider lg:text-6xl md:text-5xl text-opposite"
        >
          CSS Snippets
        </h3>
        <p class="mt-8 text-lg text-opposite">
          Free and ready to use CSS snippets for generic html components.
        </p>
        <div
          class="relative flex items-center w-6/12 mx-auto mt-24 transition-all duration-300 rounded shadow-xl bg-secondary hover:shadow-2xl justify-evenly"
        >
          <SearchIcon
            class="absolute top-0 left-0 w-6 h-6 mt-5 ml-4 fill-current text-secondary"
          />
          <input
            v-model="searchQuery"
            id="search"
            type="text"
            name="search"
            placeholder="Search for a component"
            class="w-full py-4 pl-12 pr-4 text-lg rounded bg-secondary"
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
  data() {
    return {
      searchQuery: '',
    }
  },
  watch: {
    searchQuery(val) {
      this.$store.commit('SET_SEARCH_QUERY', val)
    },
  },
}
</script>
