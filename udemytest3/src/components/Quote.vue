<template>
  <v-app>
    <v-col>
      <v-card class="quotebox text-center"   color="#e9e9e9"><slot></slot> </v-card>
    </v-col>
      
  </v-app>
</template>

<script>


export default {
  data(){
    return{

    }
  },

  components: {
  },

  methods:{

  }


};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

.quotebox{
    width: 250px;
    height: 180px;
    background-color: #e9e9e9;
    font-family: 'Shadows Into Light', cursive;
    font-size: 30px;
    transition: 0.3s;
}
.quotebox:hover{
  background-color: rgb(255, 173, 173) !important;
  cursor: pointer;
}
</style>