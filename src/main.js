import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import Vuelidate from "vuelidate/src";


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date',dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

firebase.initializeApp( {
  apiKey: "AIzaSyDDFU2zNenRnHSgIvTVwZnN6bIkrq5gpG0",
  authDomain: "crmvueui.firebaseapp.com",
  projectId: "crmvueui",
  storageBucket: "crmvueui.appspot.com",
  messagingSenderId: "977596731132",
  appId: "1:977596731132:web:52989c04dd292beafc1179",
  measurementId: "G-DC3PBMME6N"
})

let app

firebase.auth().onAuthStateChanged(()=>{
  if (!app){
    app=new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
