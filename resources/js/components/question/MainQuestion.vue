<template>
    <v-row>
        <v-col
            cols="12"
            md="8"            
        >
           <div class="mr-12">
                <Header v-if="question" :question="question"></Header>
                <Timeline v-if="replies" :replies="replies"></Timeline>
            </div>
        </v-col>
        <v-col
            cols="12"
            md="4"              
        >            
            <related-questions></related-questions>            
        </v-col>
    </v-row>          
</template>

<script>
import RelatedQuestions from './RelatedQuestions'
import Timeline from './Timeline'
import Header from './Header'

export default {
    components: {RelatedQuestions, Timeline, Header},

    data() {
        return {
            replies: null,
            question: null,
        }
    },

    created() {
        axios.get(`http://127.0.0.1:8000/api/question/${this.$route.params.slug}/reply/`)
        .then(res => this.replies = res.data.data);

        axios.get(`http://127.0.0.1:8000/api/questions/${this.$route.params.slug}`)
        .then(res => this.question = res.data.data);
    }
}
</script>
