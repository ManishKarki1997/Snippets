<template>
  <div class="w-full h-full bg-primary">
    <Navbar />
    <Nuxt style="min-height: calc(100vh - 4rem)" />
    <transition-group
      name="slide-fade"
      mode="out-in"
      tag="div"
      class="fixed bottom-0 right-0 mb-6 mr-6"
    >
      <Notification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '~/components/Navbar'
import Notification from '~/components/Notification'

export default {
  components: {
    Navbar,
    Notification,
  },
  computed: {
    ...mapState(['notifications']),
  },
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
