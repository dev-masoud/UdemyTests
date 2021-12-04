<template>
  <div id="app">
    <div class="box">
          <div>
      <h1>parent</h1>
    </div>
      <h2>my name is: {{theName}} </h2>
      <h2>my age is: {{theAge}} </h2>

<div>
      <button @click="changeName">change name</button>

</div>
          <div class="child-con">

      <Child1 :name="theName"
       @resetIt="theName=$event"
        :age="theAge">
        <h3>hi iam Masoud</h3>
        </Child1>

        
      <Child2 :Name="theName" 
      @destroyIt="theName=$event"
      :Age="theAge"
      @editAge="theAge=$event">
      
      
      </Child2>

    </div>
    </div>

    
  </div>
</template>

<script>
import Child1 from './components/child1.vue'
import Child2 from './components/child2.vue'


export default {
  data(){
    return{
      theName: "max",
      theAge: "24"
    }
  },
  name: 'App',
  components: {
    Child1,
    Child2,
  },
  methods:{
    changeName(){
      this.theName="Aliagha"
    }
  }
}
</script>

<style scoped>
.box{
  width: 100vw;
  height: 50vh;
  background-color:rgb(0, 162, 255);
  display: flex;
  flex-direction: column;
}
.child-con{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
