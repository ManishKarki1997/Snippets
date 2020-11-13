<template>
  <div class="bg-primary text-primary">
    <Hero class="pt-16 lg:pt-32" />
    <div class="container mt-32">
      <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div v-for="(category, i) in categories" :key="'category-' + i">
          <Category :category="category" />
        </div>
      </div>
      <div class="flex items-center justify-between w-full mt-24 mb-6">
        <p class="text-lg">
          <span class="font-bold">{{ snippets.length }}</span> Snippets
        </p>

        <div class="flex items-center px-3">
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
import Hero from '@/components/Hero'
import Category from '@/components/Category'
import Snippet from '@/components/Snippet'

export default {
  components: {
    Hero,
    Category,
    Snippet,
  },
  async asyncData({ $content, params }) {
    const snippets = await $content('snippets').fetch()
    console.log(snippets)
    return { snippets }
  },
  data() {
    return {
      categories: [
        {
          name: 'Buttons',
          iconName: 'SquareIcon',
          description:
            'Buttons with SVG icons, animations, transitions and hover effects',
          total: 31,
        },
        {
          name: 'Loaders',
          iconName: 'SquareIcon',
          description: 'Different variations of loaders made purely using CSS',
          total: 14,
        },
        {
          name: 'Cards',
          iconName: 'CircleIcon',
          description:
            'Beautiful CSS cards, vertical and horizontal with different variations',
          total: 11,
        },
        {
          name: 'Avatars',
          iconName: 'CircleIcon',
          description:
            'User avatars : circular, square and rounded, with badges and variations',
          total: 7,
        },
        {
          name: 'Box Shadows',
          iconName: 'SquareIcon',
          description:
            'Beautiful box shadows with varying intensity, for all use cases',
          total: 12,
        },
        {
          name: 'Searches',
          iconName: 'CircleIcon',
          description:
            'Input search component with SVG icons, animations and transitions',
          total: 7,
        },
      ],
    }
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
