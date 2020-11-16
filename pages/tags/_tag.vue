<template>
  <div class="container">
    <div class="py-6 text-primary lg:py-16">
      <div
        class="w-full mt-2 mb-6 md:flex md:flex-row md:items-center md:justify-between sm:flex-col"
      >
        <div class="flex items-center">
          <p>Snippets with the tag</p>
          <h3 class="mx-2 text-lg font-bold tracking-wider underline">
            {{ $route.params.tag }}
          </h3>
          <p class="font-bold">({{ snippets.length }})</p>
        </div>
        <div
          class="relative flex items-center mt-4 transition-all duration-300 rounded shadow-xl sm:w-full md:w-64 lg:mt-0 bg-secondary hover:shadow-2xl justify-evenly"
        >
          <SearchIcon
            class="absolute top-0 left-0 w-4 h-4 mt-3 ml-4 fill-current text-secondary"
          />
          <input
            id="search"
            v-model="searchQuery"
            type="text"
            name="search"
            placeholder="Search for a component"
            class="w-full py-2 pl-12 pr-4 rounded text-md bg-secondary"
          />
        </div>
      </div>

      <div
        v-if="snippets.length > 0"
        class="grid gap-8 pb-8 mt-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <Snippet
          v-for="(snippet, i) in snippets"
          :key="'snippet-' + i"
          :snippet="snippet"
        />
      </div>

      <div
        v-if="snippets.length == 0"
        class="flex items-center justify-center w-full h-64 text-center text-primary"
      >
        <h4 class="text-xl font-semibold tracking-wider sm:text-lg">
          No snippets found with the tag {{ $route.params.tag }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import Snippet from '@/components/Snippet'
import SearchIcon from 'assets/icons/search-outline.svg?inline'

export default {
  components: {
    Snippet,
    SearchIcon,
  },
  data() {
    return {
      snippets: [],
      searchQuery: '',
    }
  },
  watch: {
    searchQuery: {
      immediate: true,
      async handler(val) {
        if (!val) {
          this.snippets = await this.$content('snippets')
            // .limit(20)
            .where({ tags: { $contains: [`${this.$route.params.tag}`] } })
            .fetch()
          return
        }
        this.snippets = await this.$content('snippets')
          // .limit(20)
          .search(this.searchQuery)
          .fetch()
      },
    },
  },
}
</script>
