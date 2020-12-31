<template>
  <div>

  <div class="app-main-layout">
    <Navbar @click="isFetcghing=!isFetcghing"/>
    <SideBar v-model="isFetcghing"/>
    <main class="app-content" :class="{full:!isFetcghing}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import SideBar from "@/components/app/SideBar";

export default {
  name: "main-layout",

  data() {
    return {
      isFetcghing: true
    }
  },
  mounted() {
    const userInfo=this.$store.dispatch('getUserInfo')
  }
  components: {
    SideBar,
    Navbar

  }
}
</script>

<style scoped>

</style>
