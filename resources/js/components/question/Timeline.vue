<template>
    <div>            
        <v-timeline class="v-timeline--dense"
        :align-top="alignTop"
        :dense="dense"
        :reverse="reverse"                    
        >
            <v-timeline-item       
                v-for="reply in replies"
                :key="reply.id"        
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
                <Reply                   
                    :reply="reply"
                ></Reply>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>

import TextEditor from './TextEditor'
import Reply from './Reply'

  export default {
    components: {TextEditor, Reply},
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

    props: ['replies'],

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
