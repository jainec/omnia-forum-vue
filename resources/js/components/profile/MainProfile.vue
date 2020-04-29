<template>    
  <v-row>
    <v-col
      cols="12"
      md="3"
      
    >
      <div class="mt-3 d-flex justify-center"><Avatar></Avatar></div>            
      <div class="mt-10"><Analytics></Analytics></div>
    </v-col>         
    <v-col
      cols="12"
      md="9"     
      class="pl-12"        
    >
      <div class="ml-7">
        <div class="mb-8"><Header></Header></div>
        <div class="mb-8"><basic-information></basic-information></div> 
        <div class="mb-8"><Biography></Biography></div> 
        <div><Password></Password></div>
      </div>
    </v-col>
  </v-row>  
</template>

<script>

import Header from './Header'
import BasicInformation from './BasicInformation'
import Biography from './Biography'
import Password from './Password'
import Avatar from './Avatar'
import Analytics from './Analytics'


export default {
    components: {Header, BasicInformation, Biography, Password, Avatar, Analytics},
  
}

</script>

<style>

 

</style>