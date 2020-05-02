<template>
    <v-card class="elevation-2">
        <!-- <v-card-title class="headline">Lorem ipsum</v-card-title> -->
        <v-list-item three-line>
            <v-list-item-avatar color="grey"><v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img></v-list-item-avatar>
            <v-list-item-content>
            <!-- <v-list-item-title class="font-question"><b>What is your favorite programming language?</b></v-list-item-title> -->
            <v-row>
                <v-col
                    cols="12"
                    md="10"
                >
                    <v-list-item-subtitle class="mb-2">by {{reply.user}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Posted {{reply.created_at}}</v-list-item-subtitle>
                </v-col>
                <v-col
                    cols="12"
                    md="1"
                    v-if="own"
                    @click="edit"
                >
                    <v-btn icon>
                        <v-icon color="orange">edit</v-icon>
                    </v-btn>    
                </v-col>
                <v-col
                    cols="12"
                    md="1"
                    v-if="own"
                    @click="destroy(index)"
                >
                    <v-btn icon>
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            </v-list-item-content>                  
        </v-list-item>

        <v-card-text>
            <div v-if="!show_edit">{{reply.description}}</div>
            <edit-reply v-if="show_edit" :text="reply.description" :replyId="reply.id"></edit-reply>
        </v-card-text>
        
        <v-row
            align="center"
            justify="end"
            class="mr-1"
        >            
            <v-btn icon :color="color" @click="like(reply.id)">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <span class="mr-2 like">{{likes_number}}</span>
        </v-row>                
    </v-card>
</template>

<script>
import EditReply from './EditReply'
export default {
    components: {EditReply},
    props: ['reply', 'index'],   
    data() {
        return {
            show_edit: false,
            likes_number: this.reply.number_likes,            
            liked: this.reply.liked_by_logged_user,            
        }
    },    
    computed: {
        own() {
            return User.own(this.reply.user_id);
        },

        color() {
            return this.liked ? 'red' : ''
        }
    },
    
    created() {
        this.listen()
    },

    methods: {
        destroy(index) {
            EventBus.$emit('delete_reply', index)
        },
        
        edit() {
            this.show_edit = !this.show_edit
        },

        listen() {
            EventBus.$on('reply_edited', (description, replyId) => {
                if(this.reply.id == replyId)
                    this.reply.description = description
                this.show_edit = false
            })
        },

        like(reply_id) {
            if(User.loggedIn()) {
                this.liked ? this.unlikeIt(reply_id) : this.likeIt(reply_id)
                this.liked = !this.liked
            }
        },

        likeIt(reply_id) {         
            axios.post(`http://127.0.0.1:8000/api/reply/${reply_id}/like`, {user_id: User.id()})
            .then(res => {
                this.likes_number++;
            })
        },

        unlikeIt(reply_id) {
            axios.delete(`http://127.0.0.1:8000/api/reply/${reply_id}/unlike`, {user_id: User.id()})
            .then(res =>{
                this.likes_number--;
            })
        },
    }
}
</script>

<style>

</style>
