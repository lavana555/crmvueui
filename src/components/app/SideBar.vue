<template>
  <ul class="sidenav app-sidenav open" :class="{open:value}">
    <router-link
        v-for="link in links"
        :key="link.to"
        tag="li"
        active-class="active"
        :to="link.to"
        :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "SideBar",
  props:['value'],
  data() {
    return {
      links: [
        {title: 'Счет', to: '/',exact:true},
        {title: 'История', to: '/history'},
        {title: 'Планирование', to: '/planning'},
        {title: 'Новая Запись', to: '/record'},
        {title: 'Категории', to: '/categories'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
