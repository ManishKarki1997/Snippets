<template>
  <div
    tabindex="0"
    class="px-4 py-8 mb-2 transition-all duration-300 rounded-lg shadow cursor-pointer h-36 bg-secondary hover:shadow-xl group"
  >
    <div class="flex">
      <div
        class="flex items-center justify-center w-12 h-10 px-2 py-2 rounded-lg bg-primary text-accent"
      >
        <component
          :is="category.iconName"
          class="w-6 h-6 text-current fill-current"
        />
      </div>
      <div class="ml-4">
        <div>
          <h4 class="-mt-1 text-xl font-bold tracking-wide">
            {{ category.name }}
          </h4>
          <p class="my-2 tracking-wide">
            {{ category.description }}
          </p>
        </div>
        <!-- <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <h4 class="-mt-1 text-xl font-bold">{{ category.total }}</h4>
            <p class="ml-2">{{ category.name.toLowerCase() }}s</p>
          </div>
          <button
            class="hidden px-4 transition-all duration-300 border border-gray-800 rounded text-primary hover:text-opposite hover:border-transparent group-hover:block hover:bg-accent"
          >
            View
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import SquareIcon from '@/assets/icons/square-outline.svg?inline'
import CircleIcon from '@/assets/icons/circle-outline.svg?inline'

export default {
  components: {
    CircleIcon,
    SquareIcon,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>
