<template>
  <div class="bg-primary text-primary">
    <Hero class="lg:pt-32 pt-16" />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
export default {
  components: {
    Hero,
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
