<template>
  <form class="card auth-card" @submit.prevent="submit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"

        >
        <div class="error" v-if="!$v.email.required">email is required</div>
        <div class="error" v-if="!$v.email.email">email is email</div>
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
            v-model="password"
            id="password"
            type="text"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !v.password.required) || ($v.password.$dirty && $v.password.minLength)}"
        >
        <div class="error" v-if="!$v.password.required">Password is required</div>
        <div class="error" v-if="!$v.password.minLength">Password is {{ password.length }}</div>
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"

        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>


import {required, email, minLength} from "vuelidate/lib/validators/";
import messages from "@/utils/messages";


export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    // this.$message('text')
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    async submit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/?message=e')
      } catch (e) {

      }
    }
  },
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(5)}


  }

}

</script>

<style scoped>

</style>
