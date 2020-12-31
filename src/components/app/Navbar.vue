<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date('datetime') }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            USER NAME
            <!--            <i class="material-icons right">arrow_drop_down</i>-->
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <a href="#" class="black-text">
                Профиль
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      date: Date(),
      interval: null,
      dropdown: null
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    })
    //M.Dropdown.init()
  },
  methods: {
    async logout() {
      console.log('logout')
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }

  }


}
</script>

<style scoped>

</style>
