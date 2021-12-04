<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-12 col-md-6 col-sm-4">
        <transition name="slide" appear mode="out-in">
      <component :is="selected" @changeIt="myfunc"></component>
    </transition>
      </div>
    </div>

    
      
  </div>
</template>

<script>
import question from './components/question.vue'
import answer from './components/answer.vue'


export default {
  data(){
    return{
        selected:'app-question'
    }
  },

  methods:{
    myfunc(){
      if(this.selected=='app-answer'){
        this.selected='app-question'
      }
      else{
        this.selected='app-answer'
      }
      
    }
  },


  name: 'App',
  components: {
    appQuestion:question,
    appAnswer:answer
  }
}
</script>

<style scoped>
.col{
  margin-top: 50px;
}
 @keyframes slide-in{
    from{
      transform: translateY(20px);
      opacity: 0;
    }
    to{ 
      transform: translateY(0px);
    }
  }

   @keyframes slide-out{
    from{
      transform: translateY(0px);
    }
    to{ 
      transform: translateY(-20px);
      opacity: 0;
    }
  }

    .slide-enter{
    opacity: 0;
  }

  .slide-enter-active{
    animation: flipInX 0.5s  forwards;
  }

  .slide-leave{
    opacity: 1;

  }

  .slide-leave-active{
    animation: flipOutX 0.5s  forwards;
    position: absolute;

  }
  .slide-move{
    transition: transform 1s;
  }
</style>
