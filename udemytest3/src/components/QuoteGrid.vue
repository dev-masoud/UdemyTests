<template>
  <v-app>
    
      <v-row>

        <app-quote v-for="(i,index) in theQuote" :key="i" @click.native="deleteText(index)">{{i}}</app-quote>
          
      </v-row>
  </v-app>
</template>

<script>

import Quote from './Quote.vue'
export default {
  data(){
    return{
        
    }
  },
  props:[
      'theQuote'
  ],

  components: {
      appQuote:Quote 
  },

  methods:{
    deleteText(a){
      this.$emit('deletefunc',a)
    }
  }


};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

.quotebox{
    width: 300px;
    height: 200px;
    background-color: #e9e9e9;
    font-family: 'Shadows Into Light', cursive;
    font-size: 30px;
}
</style>