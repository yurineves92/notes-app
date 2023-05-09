<template>
  <div id="app" class="main_content">
    <component :is="layout"></component>
  </div>
</template>

<script>
import AdminLayout from './components/AdminLayout.vue'
import AppLayout from './components/AppLayout.vue'

export default {
  name: 'App',
  computed: {
    layout() {
      const loggedIn = localStorage.getItem('user')
      return loggedIn ? AdminLayout : AppLayout
    }
  }
}
</script>

<style scoped>
</style>
