<template>
  <div class="flex items-center lg:w-1/3 sm:w-full md:w-2/3 bg-primary">
    <button
      class="flex items-center px-4 py-1 mr-4 border border-gray-800 rounded-sm text-primary hover:bg-accent hover:border-transparent hover:text-opposite"
      @click="handlePrev"
    >
      <PrevIcon class="w-4 h-4 mr-4 fill-current" />
      Prev
    </button>
    <button
      class="flex items-center px-4 py-1 mr-4 border border-gray-800 rounded-sm text-primary hover:bg-accent hover:border-transparent hover:text-opposite"
      @click="handleNext"
    >
      Next
      <NextIcon class="w-4 h-4 ml-4 fill-current" />
    </button>
  </div>
</template>

<script>
import PrevIcon from '@/assets/icons/chevron-back.svg?inline'
import NextIcon from '@/assets/icons/chevron-forward.svg?inline'

export default {
  components: {
    PrevIcon,
    NextIcon,
  },
  methods: {
    handleNext() {
      this.$emit('handleNext')
    },
    handlePrev() {
      this.$emit('handlePrev')
    },
  },
}
</script>
