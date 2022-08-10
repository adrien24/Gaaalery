<template>
<div class="container">
   
  <Nuxt />
</div>
</template>

<script>
export default {

  mounted(){
    if(AuthenticatorAttestationResponse === false){
      console.log('oui');
    }else{
      
    }
  }

}
</script>

<style>

</style>