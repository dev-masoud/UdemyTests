<template>
  <div id="app">
    <div>
      <h1>child2</h1>
    </div>
    <div class="box">
      <h2>my name is: {{Name}}</h2>
      <h2>my age is: {{Age}}</h2>

      <div><button @click="destroy">destroy the name</button></div>
      <div><button @click="ageEdit">Edit the Age</button></div>

    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  name: 'App',

    data(){
        return{
            
        }
    },
    props:{
        Name:String,
        Age:Number
    },

  components: {

    
  },
  methods:{
      destroy(){
          this.Name=""
          this.$emit('destroyIt',this.Name)
      },
        ageEdit(){
          this.Age="75"
        //   this.$emit('editAge',this.Age)
        //   eventBus.$emit('editAge',this.Age)
        eventBus.change(this.Age)
      }
  },

}
</script>

<style scoped>
.box{
  width: 45vw;
  height: 25vh;
  background-color:rgb(255, 166, 243);
}
</style>