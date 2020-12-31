<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
  computed:{
    error() {
   return    this.$store.getters.error
    }
  },
  watch:{
    error(fberror) {
      console.log('fberror', fberror)
    }
  }
}
</script>

<style scoped>

</style>
