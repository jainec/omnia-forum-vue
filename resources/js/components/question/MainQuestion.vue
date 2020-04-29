<template>
    <v-row>
        <v-col
            cols="12"
            md="8"            
        >
           <div class="mr-12"><Replies></Replies></div>
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
import Replies from './Replies'

export default {
    components: {RelatedQuestions, Replies}
}
</script>
