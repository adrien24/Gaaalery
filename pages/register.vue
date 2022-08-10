<template>
    <div class="register">
       
    </div>
  
</template>
<script>

import axios from 'axios'


export default {

  data(){
    return{
      
    }
  },
  
  mounted(){
   
    
    
  },

  methods:{
   
   callOAuth(){
     axios.post('')
     .then(response => (this.log = response.data))
   }
   
    
  }
}
</script>

<style scoped>
</style>
