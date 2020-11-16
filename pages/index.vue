<template>
  <div class="bg-primary text-primary">
    <Hero class="pt-16 lg:pt-32" />
    <div class="container mt-32">
      <div
        v-if="!searchQuery"
        class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div v-for="(category, i) in categories" :key="'category-' + i">
          <Category :category="category" />
        </div>
      </div>
      <div class="flex items-center justify-between w-full mt-24 mb-6">
        <p class="text-lg">
          <span class="font-bold">{{ snippets.length }}</span> Snippets
        </p>

        <!-- <div class="flex items-center px-3">
          <label
            class="block mr-2 text-xs font-bold tracking-wide uppercase text-secondary"
            for="grid-state"
          >
            Sort By
          </label>
          <div class="relative">
            <select
              id="grid-state"
              class="block w-full px-4 py-2 pr-8 leading-tight border border-gray-500 rounded appearance-none text-secondary bg-secondary focus:outline-none focus:border-gray-800"
            >
              <option>Uploaded Date</option>
              <option>Alphabetical</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-secondary"
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div> -->
      </div>

      <div
        class="grid pb-8 md:gap-8 sm:gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <Snippet
          v-for="(snippet, i) in snippets"
          :key="'snippet-' + i"
          :snippet="snippet"
        />
      </div>

      <div class="pb-6 mt-6">
        <Pagination @handleNext="handleNext" @handlePrev="handlePrev" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Category from '@/components/Category'
import Pagination from '@/components/Pagination'
import Snippet from '@/components/Snippet'
import { mapState } from 'vuex'
import categories from '@/seeds/categories'

export default {
  components: {
    Hero,
    Category,
    Snippet,
    Pagination,
  },

  data() {
    return {
      snippets: [],
      page: 1,
      itemsCount: 20,
      maxPage: 1,
      categories,
    }
  },
  computed: {
    ...mapState(['searchQuery']),
  },
  watch: {
    searchQuery: {
      immediate: true,
      async handler(query) {
        if (!query) {
          this.snippets = await this.$content('snippets')
            .limit(this.itemsCount)
            .fetch()

          const allSnippets = await this.$content('snippets').fetch()
          this.maxPage = allSnippets.length
        } else {
          this.snippets = await this.$content('snippets')
            .search(query)
            .limit(this.itemsCount)
            .fetch()
        }
      },
    },
  },
  methods: {
    async handleNext() {
      if (this.maxPage === this.page) return
      this.page++
      const snippets = await this.$content('snippets')
        .skip((this.page - 1) * this.itemsCount)
        .limit(this.itemsCount)
        .fetch()

      this.snippets = snippets
    },
    async handlePrev() {
      if (this.page === 1) {
        return
      }
      this.page--

      const snippets = await this.$content('snippets')
        .skip((this.page - 1) * this.itemsCount)
        .limit(this.itemsCount)
        .fetch()

      this.snippets = snippets
    },
    async fetchSnippets() {
      const snippets = await this.$content('snippets')
        .limit(this.itemsCount)
        .fetch()
      this.snippets = snippets
    },
  },

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style>
@import url('~/assets/css/tailwind.css');

.floating {
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
}

.button {
  color: #1a202c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #2d3748;
  border-radius: 0.25rem;
  padding: 0.25rem 1.5rem;
  overflow: hidden;
}
.button svg {
  width: 1rem;
  height: 1rem;
  stroke-width: 2px;
  stroke: black;
  cursor: pointer;
  transform: translateX(-10rem);
  transition: all 0.3s ease-in-out;
}

.button svg:hover {
  stroke: #2c5282;
}

.button:hover svg {
  transform: translateX(-0.5rem);
}

.button span {
  transform: translateX(-0.5rem);
  transition: all 0.3s ease-in-out;
}
.button:hover span {
  transform: translateX(0.5rem);
}
</style>
