<template>
    <div>            
        <v-timeline class="v-timeline--dense"
        :align-top="alignTop"
        :dense="dense"
        :reverse="reverse"                    
        >
            <v-timeline-item       
                v-for="(reply, index) in content"
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
                    :reply="reply" :index="index"
                ></Reply>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>

import Reply from './Reply'

  export default {
    components: {Reply},

    props: ['replies'],

    data() {
        return {
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
            content: this.replies,
        }
    },
      
    created() {
        this.listen()
    },

    methods: {
        toggleEditor: function() {
            this.isActive = !this.isActive;
        },

        listen() {
            EventBus.$on('add_reply', (reply) => {            
                this.content.unshift(reply);
                // window.scrollTo(0,0);
            });

            EventBus.$on('delete_reply', (index) => {                
                axios.delete(`http://127.0.0.1:8000/api/question/${this.$route.params.slug}/reply/${this.content[index].id}`)
                .then(res =>   this.content.splice(index,1));              
            });
        },
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
