<template>
  <div class="container"> 
    <div class="row">
      <div class="col col-lg-12 col-md-6 col-sm-4">

        <div>
  <b-card-group deck>
    <b-card
      :header="question()"
      header-tag="header"
      
    >
    
      <b-card-text>Header and footers using props.</b-card-text>
      <div class="btn-contain" width="30px">

      <b-button href="#" variant="primary" v-for="(index,i) in btnNumbers()" :key="i" @click="selectBtn(index)">{{index}}</b-button>


      </div>
    </b-card>

  </b-card-group>
</div>

      </div>
    </div>

    <div class="row">
      <div class="col col-lg-12 col-md-6 col-sm-4"></div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      firstNum:'',
      secondNum:'',
      answer:'',
      // firstBtn:'',
      // secondBtn:'',
      // thirdBtn:'',
      btnNums:[],


      

    }
  },
  // created(){
  //   const g = [1,2,3,4,5,6,7]
  //   const shuffledArray = g.sort((a, b) => 0.5 - Math.random());
  //   return console.log(shuffledArray);
  // },

  methods:{
    randomNum(min,max){
        return Math.max(Math.floor(Math.random() * max)+1 , min)
    },


    question(){
      this.firstNum =this.randomNum(1,30);
      this.secondNum =this.randomNum(1,30);

      return "what is " + this.firstNum + "+"+ this.secondNum + '?'
    },

    answerNum(){
      this.answer=this.firstNum + this.secondNum
      return this.answer
    },

    btnNumbers(){
      const first = this.randomNum(1,30)
      const second = this.randomNum(1,30)
      const third = this.randomNum(1,30)
      
      const a = [first,second,third,this.answerNum()]
      const shuffledArray = a.sort((a, b) => 0.5 - Math.random());
      return shuffledArray
    },

    selectBtn(selected){
      if (this.answerNum()===selected){
        this.$emit('changeIt')
      }
      else{
        alert("gooz")
      }
     
        
      
    }
    
  },

  name: 'HelloWorld',
  props: {
  }

  
}
</script>

<style scoped>

.btn-contain{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>
