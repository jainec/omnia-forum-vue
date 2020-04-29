<template>
    <div>
        <div class="answer-question">
            <span class="question-title">What is your favorite programming language?</span>
            <br>
            <div class="row">
                <div class="col-sm-2">
                    <v-chip color="primary" small label>Technology</v-chip>
                </div>
                <div class="col-sm-1">
                    <v-btn text id="btn-answer" @click="toggleEditor()"><span class="material-icons icon-answer">add_comment</span> Answer</v-btn>
                </div>
            </div>       
            <div id="text-editor"
                v-if="isActive"
            >
                <text-editor></text-editor>               
            </div>
            
            <div class="mb-1">
                <span class="answers-title">6 answers</span>
            </div>
            <v-divider></v-divider>
        </div>                
       
        <div>            
            <v-timeline class="v-timeline--dense"
            :align-top="alignTop"
            :dense="dense"
            :reverse="reverse"                    
            >
                <v-timeline-item
                    v-for="n in 3"
                    :key="n"
                    :fill-dot="fillDot"
                    :hide-dot="hideDot"
                    :icon="icon ? 'mdi-star' : ''"
                    :icon-color=" iconColor ? 'deep-orange' : ''"
                    :left="left"
                    :right="right"
                    :small="small"
                    color="purple darken-2"
                >
                    <template v-slot:icon>
                    <v-avatar v-if="avatar">
                        <img src="http://i.pravatar.cc/64">
                    </v-avatar>
                    </template>
                    <span slot="opposite">Tus eu perfecto</span>
                    <v-card class="elevation-2">
                    <!-- <v-card-title class="headline">Lorem ipsum</v-card-title> -->
                    <v-list-item three-line>
                        <v-list-item-avatar color="grey"><v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img></v-list-item-avatar>
                        <v-list-item-content>
                        <!-- <v-list-item-title class="font-question"><b>What is your favorite programming language?</b></v-list-item-title> -->
                        <v-list-item-subtitle>by Uncle Bob</v-list-item-subtitle>
                        <v-list-item-subtitle>Posted 2020-04-18</v-list-item-subtitle>
                        </v-list-item-content>                  
                    </v-list-item>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                    <v-row
                        align="center"
                        justify="end"
                        class="mr-1"
                        >            
                         <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <span class="mr-2 like">10</span>
                        </v-row>
                   
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>
 
    </div>
</template>

<script>

import TextEditor from './TextEditor'

  export default {
    components: {TextEditor},
    data: () => ({
      alignTop: false,
      avatar: false,
      dense: false,
      fillDot: false,
      hideDot: false,
      icon: false,
      iconColor: false,
      left: false,
      reverse: false,
      right: false,
      small: false,
      isActive: false,
    }),
    methods: {
        toggleEditor: function() {
        this.isActive = !this.isActive;
        }
    }
  }
</script>

<style>
    .question-title {
        font-weight: bold;
        font-size: 20px;
    }

    .answers-title {
        font-size: 18px;
    }

    #btn-answer {
        text-transform: none;
        font-size: 16px;
        color: gray;
    }

    .icon-answer {
        margin-right: 5px;
        color: #1976d2;
    }

    .like {
        font-size: 15px;
    }  

</style>
