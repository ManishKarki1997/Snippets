<template>
  <div class="bg-primary text-primary">
    <Hero class="pt-16 lg:pt-32" />
    <div class="container mt-32">
      <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div v-for="(category, i) in categories" :key="'category-' + i">
          <Category :category="category" />
        </div>
      </div>

      <div
        class="grid gap-8 mt-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <div v-for="(snippet, i) in snippets" :key="'snippet-' + i">
          <Snippet :snippet="snippet" />
          <!-- <Snippet :snippetImage="1000 + i" /> -->
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
  async asyncData({ $content, params }) {
    const snippets = await $content('blog').limit(5).fetch()
    return { snippets }
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
</style>
