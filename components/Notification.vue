<template>
  <div
    class="max-w-md px-4 py-4 mb-2 rounded-lg shadow cursor-pointer bg-secondary text-primary"
    @click="removeNotification"
  >
    <div class="flex items-center">
      <p class="text-lg">Snippet copied successfully</p>

      <div class="w-6 h-6 ml-2">
        <ConfettiIcon class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script>
import ConfettiIcon from '@/assets/icons/confetti.svg?inline'
export default {
  components: {
    ConfettiIcon,
  },
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timer: null,
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.removeNotification()
    }, 3000)
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    removeNotification() {
      this.$store.commit('REMOVE_NOTIFICATION', this.notification.id)
    },
  },
}
</script>
