<template>
    <v-row>
        <v-col
            cols="12"
            md="4"
        >
        <div><category></category></div>
        </v-col>
        <v-col
            cols="12"
            md="8"
        >            
            <div><question-area></question-area></div>
            <div><feed></feed></div>
        </v-col>
    </v-row>
</template>

<script>

import Category from './Category'
import Feed from './Feed'
import QuestionArea from './QuestionArea'

export default {
    components: {Category, Feed, QuestionArea}
}
</script>

<style>

</style>
