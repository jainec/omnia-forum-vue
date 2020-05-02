<template>
    <div>
        <v-textarea
            outlined
            name="input-7-4"
            label="Reply"
            v-model="description"
        ></v-textarea>
        <v-row class="d-flex justify-end">
            <v-btn @click="update" dark color="green">Save</v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
    props: ['text', 'replyId'],

    data() {
        return {
            description: null,
        }
    },

    created() {
        this.description = this.text
    },

    methods: {
        update() {
            axios.patch(`http://127.0.0.1:8000/api/question/${this.$route.params.slug}/reply/${this.replyId}`, {description: this.description})
            .then(res => EventBus.$emit('reply_edited', this.description, this.replyId))
        }
    }
}

</script>