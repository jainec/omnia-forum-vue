<template>
    <div class="answer-question">
        <v-row>
            <v-col 
                cols="12"
                md="10"
            >
                <span class="question-title">{{question.description}}</span><br>
                <small>Created by {{question.user}}</small>
            </v-col>
            <v-col 
                v-if="own"
                cols="12"
                md="1"
            >
               <edit-question :question="question"></edit-question>
            </v-col>     
             <v-col 
                v-if="own"
                cols="12"
                md="1"
            >
                <v-btn 
                 icon
                 color="red"
                 @click="destroy"
                >
                    <span class="material-icons">delete</span> 
                </v-btn>
            </v-col>         
        </v-row>        
        <br>
        <div class="row">
            <div class="col-sm-2">
                <v-chip color="primary" small label>{{question.category}}</v-chip>
            </div>
            <div class="col-sm-1">
                <v-btn text id="btn-answer" @click="toggleEditor()"><span class="material-icons icon-answer">add_comment</span> Reply</v-btn>
            </div>
        </div>       
        
        <div>
            <new-reply v-if="show_editor"></new-reply>
        </div>
        
        <div class="mb-1">
            <span class="answers-title">{{question.number_replies}} replies</span>
        </div>
        <v-divider></v-divider>
    </div>   
</template>

<script>
import NewReply from './NewReply'
import EditQuestion from './EditQuestion'
export default {
    components: {NewReply, EditQuestion},
    props: ['question'],
    data() {
        return {            
            own: User.own(this.question.user_id),
            show_editor: false,
        }
    },
    methods: {
        destroy() {
            axios.delete(`http://127.0.0.1:8000/api/questions/${this.$route.params.slug}`)
            .then(res => this.$router.push('/home'))
            .catch(error => console.log(error.response.data))
        }, 
        
        toggleEditor() {
            return this.show_editor = !this.show_editor;
        }
    },   
}
</script>

<style>

</style>
