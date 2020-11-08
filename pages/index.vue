<template>
  <div class="bg-primary text-primary">
    <Hero class="pt-16 lg:pt-32" />
    <div class="container mt-32">
      <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div v-for="(category, i) in categories" :key="'category-' + i">
          <Category :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Category from '@/components/Category'

export default {
  components: {
    Hero,
    Category,
  },
  data() {
    return {
      categories: [
        {
          name: 'Button',
          iconName: 'SquareIcon',
          total: 31,
        },
        {
          name: 'Loader',
          iconName: 'SquareIcon',
          total: 14,
        },
        {
          name: 'Card',
          iconName: 'CircleIcon',
          total: 11,
        },
        {
          name: 'Avatar',
          iconName: 'CircleIcon',
          total: 7,
        },
        {
          name: 'Box Shadow',
          iconName: 'SquareIcon',
          total: 12,
        },
        {
          name: 'Search',
          iconName: 'CircleIcon',
          total: 7,
        },
      ],
    }
  },
}
</script>

<style>
@import url('~/assets/css/tailwind.css');
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply w-10/12 mx-auto;
}
</style>
