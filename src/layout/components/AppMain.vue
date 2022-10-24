<template>
  <section class="app-main">
    <transition mode="out-in" name="fade-transform">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>

<style lang="scss">

</style>
