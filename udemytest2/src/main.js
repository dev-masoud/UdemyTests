import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
export const eventBus = new Vue({
  methods:{
    change(age){
      this.$emit('editAge',age)
    }
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')



