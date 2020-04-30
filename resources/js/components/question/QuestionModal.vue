<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"   
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="purple darken-2"
          dark
          v-on="on"
          style="text-transform: none"
          height="25"          
          width="130"
        >
          <span style="color: white">Ask a question</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="lighten-2 light-gray"
          style="height: 50px; padding: 10px;"          
        >
          <h5 style="margin-left: 10px">Ask a question</h5>
          <v-spacer></v-spacer>
           <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>

        </v-card-title>

        <div id="div-tips">
          <b>Tips for getting good answers quickly</b>
          <p>Make sure your question has not been asked before<br>
          Keep your question short and get to the point<br>
          Check grammar and spelling </p>
        </div>

        <div class="row">
            <div class="ma-left-10 mt-4">
              <v-img class="circle-icon" src="https://picsum.photos/510/300?random" aspect-ratio="1.7" width="40" height="40"></v-img>
            </div>            
            <div class="col mt-3 ml-0">
              <p style="font-size: 15px;">Jaine Conceicao asked</p>
            </div>            
        </div>

        <v-card-text>
           <v-text-field            
            placeholder='Start your question with "What", "How", "Why", etc'
            required
            class="pt-0 mt-0"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions
          class="light-gray"
        >           
          <v-spacer></v-spacer>
          <v-btn color="purple darken-2" text @click="dialog = false" >Close</v-btn>
          <v-btn color="purple darken-2" text @click="dialog = false">Ask</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style>

  .circle-icon {
    border-radius: 50px;
  }

  .ma-left-10 {
    margin-left: 36px;    
  }

  .hidden-overflow {
    overflow: "hidden" !important;    
  }

  #div-tips {    
    background: #ebf0ff;
    font-size: 14px;
    color: #7b1fa2;
    border-radius: 5px;
    margin: 20px 20px 5px 20px;
    padding: 15px 15px 1px 15px;
  }

  .light-gray {
    background: #ECECEE;
  }

 .row {
   margin-right: 0px !important;
 }



</style>
