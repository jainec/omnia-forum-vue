<template>  
  <v-row>    
    <v-col cols="12" md="12">                
        <v-card
        class="mx-auto"
        max-width="100%"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>                       
            <v-list-item-subtitle>
              <v-avatar color="indigo" size="20" class="mr-2">
                <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
              </v-avatar>
              Jaine Conceicao
            </v-list-item-subtitle>
            <v-list-item-title class="mb-1"><a href="#" id="a-home"><span class="font-your-question">What is your question?</span></a></v-list-item-title>              
          </v-list-item-content>          
        </v-list-item>         
      </v-card> 
    </v-col>
  </v-row>    
</template>

<style>

  #a-home {
    text-decoration: none;
    color: grey;
    font-weight: bold;
    font-size: 19px;
  }

  #a-home:hover {
    color: #7b1fa2;
  }

  .font-your-question {
    font-size: 17px;
  }

</style>
