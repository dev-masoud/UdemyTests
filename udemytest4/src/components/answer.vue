<template>
  <div class="container"> 
    <div class="row">
      <div class="col col-lg-12 col-md-6 col-sm-4">

        <div>
  <b-card-group deck >
    <b-card
        border-variant="success"
        header="success"
        header-bg-variant="success"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Congragulation</b-card-text>
      <b-button href="#" variant="primary" @click="nextQ">Next Qestion</b-button>

      </b-card>


  </b-card-group>
</div>

      </div>
    </div>



  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },

    methods:{
        nextQ(){
            this.$emit('changeIt')
        }
    }


}
</script>