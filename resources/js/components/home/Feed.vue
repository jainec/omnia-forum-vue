<template>  
  <v-row>    
    <v-col cols="12" md="12"
      v-for="question in questions"
      :key="question.id"
      
    >      
      <v-card
        class="mx-auto"
        max-width="100%"
        outlined
    >
        <v-list-item three-line>
          <v-list-item-avatar color="grey"><v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img></v-list-item-avatar>
          <div>
            <router-link to="/question"><p class="font-question mt-3"><b>{{question.question}}</b></p></router-link>
            <v-list-item-subtitle>by {{question.user}}</v-list-item-subtitle>
          </div>

          <v-list-item-content>
              <!-- <div class="overline mb-4">OVERLINE</div> -->
              <!-- <v-list-item-title class="mb-1"><h2>What is your favorite game?</h2></v-list-item-title> -->
              <!-- <v-list-item-subtitle>Katy Perry, singer and songwriter</v-list-item-subtitle> -->
          </v-list-item-content>

        </v-list-item>

        <v-card-actions>          
          <v-chip class="ma-2" color="primary" small label>Technology</v-chip>
          <v-btn text><v-icon color="blue darken-2">mdi-message-text</v-icon><router-link to='/question'><small style="margin-left: 5px;">{{question.number_replies}} answers</small></router-link></v-btn>
          <v-row
            align="center"
            justify="end"
          >            
            <v-chip class="ma-2 mt-5 mr-5" x-small>Asked {{question.created_at}}</v-chip>  
          </v-row>
        </v-card-actions>

      </v-card>
    
    </v-col>
  </v-row>  
</template>

<script>
export default {

  data() {
    return {
      questions: {},
    }
  },

  created() {
    axios.get('http://127.0.0.1:8000/api/questions')
    .then(res => this.questions = res.data.data)
  } 
}
</script>

<style>

  .tag-text {
    background: #8ac0ea;
    border-radius: 4px;
    padding: 2px;    
    font-weight: bold;
    color: black;
  }

  .font-question {
    font-size: 17px;
  }

</style>



