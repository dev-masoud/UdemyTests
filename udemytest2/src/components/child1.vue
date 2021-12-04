<template>
  <div id="app">
    <div>
      <h1>child1</h1>
    </div>
    <div class="box">
      <slot></slot>

      <h2>my name is:{{name}} </h2>
      <h2>my age is:{{age}} </h2>

      <button @click="resetName">reset name</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
    data(){
        return{

        }
    },
    props:{
        name:String,
        age:Number
    },
  name: 'App',
  components: {
  },
  methods:{
      resetName(){
          this.name='max';
          this.$emit('resetIt',this.name)
      }
  },
  created(){
    eventBus.$on('editAge', (sen)=>{
        this.age=sen;
    })
  }
}
</script>

<style scoped>
.box{
  width: 45vw;
  height: 25vh;
  background-color:rgb(134, 255, 134);
}
</style>