<template>

  <v-app>

    <v-row>
      <v-col>
        <v-progress-linear :value="quotes.length*10" height="20px" class="progress">{{quotes.length}}0/%</v-progress-linear>
      </v-col>
    </v-row>
  
 <app-new-quote @quoteAdded="addText"></app-new-quote>
<app-quote-grid :theQuote="quotes" @deletefunc="deleteText"></app-quote-grid>     


<!-- <AppQuoteGrid/> -->
  </v-app>

  
</template>

<script>

import QuoteGrid from './components/QuoteGrid.vue'
import newQuote from './components/newQuote.vue'


export default {
  data(){
    return{
        quotes:['the first quote','and the second'],
        
    }
  },

  components: {
    appQuoteGrid:QuoteGrid,
    appNewQuote:newQuote
  },

  methods:{
    addText(text){
      
      if(this.quotes.length<10){
        this.quotes.push(text)
      }
      else{
        alert('stop')
      }
    },
    deleteText(box){
      this.quotes.splice(box,1)
    }
  }


};
</script>


<style scoped>
.progress{
  margin: 30px auto ;
  width: 80vw;
  
}
</style>
