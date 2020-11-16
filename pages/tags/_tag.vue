<template>
  <div class="container">
    <div class="py-6 text-primary lg:py-16">
      <div class="flex items-center justify-between w-full mt-2 mb-6">
        <div class="flex items-center">
          <p>Snippets with the tag</p>
          <h3 class="mx-2 text-lg font-bold tracking-wider underline">
            {{ $route.params.tag }}
          </h3>
          <p class="font-bold">({{ snippets.length }})</p>
        </div>
        <div
          class="relative flex items-center w-64 transition-all duration-300 rounded shadow-xl bg-secondary hover:shadow-2xl justify-evenly"
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

      <div class="grid gap-8 pb-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div v-for="(snippet, i) in snippets" :key="'snippet-' + i">
          <Snippet :snippet="snippet" />
        </div>
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
  mounted() {
    // this.fetchSnippets()
  },
  methods: {
    async fetchSnippets() {
      const snippets = await this.$content('snippets')
        .limit(20)
        .where({ tags: { $contains: [`${this.$route.params.tag}`] } })
        .fetch()

      this.snippets = snippets
    },
  },
  watch: {
    searchQuery: {
      immediate: true,
      async handler(val) {
        if (!val) {
          this.snippets = await this.$content('snippets')
            .limit(20)
            .where({ tags: { $contains: [`${this.$route.params.tag}`] } })
            .fetch()
          return
        }
        this.snippets = await this.$content('snippets')
          .limit(20)
          .search(this.searchQuery)
          .fetch()
      },
    },
  },
}
</script>
