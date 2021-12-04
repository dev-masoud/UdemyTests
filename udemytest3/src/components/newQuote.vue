<template>
  <div class="text-center">
      <div class="page">
      <v-row>
          <v-col>
        <v-textarea
        class="textfield"
          outlined
          name="input-7-4"
          label="Quote"
          v-model="quoteText"
        ></v-textarea>

        <v-btn
        color="primary"
        elevation="2"
        @click="addquote"
        >Add Quote</v-btn>
          </v-col>
      </v-row>
      </div>
  </div>
  
</template>

<script>

import Quote from './Quote.vue'
export default {
  data(){
    return{
        quoteText:''
    }
  },
  props:[
      'theQuote'
  ],

  components: {
      appQuote:Quote 
  },

  methods:{
      addquote(){
          this.$emit('quoteAdded', this.quoteText)
          this.quoteText=''
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
.textfield{
    width: 80vw;
}
.page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>