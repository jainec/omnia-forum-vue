<template>
    <div>
        <v-alert v-if="errors" type="error">
            {{this.errors.description[0]}}
        </v-alert>
        <v-row>           
            <v-textarea
                outlined
                name="input-7-4"
                label="Reply"
                v-model="description"
            ></v-textarea>
        </v-row>
        <v-row class="d-flex justify-end">
            <v-btn color="green" :disabled="disabled" dark @click="submit">
                Submit
            </v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: null,
            errors: null
        }
    },

    computed: {
        disabled() {
            return !(this.description)
        }
    },

    methods: {
        submit() {
            axios.post(`http://127.0.0.1:8000/api/question/${this.$route.params.slug}/reply`, {description: this.description})
            .then(res => {
                this.description = '';
                EventBus.$emit('add_reply', res.data.reply)
                this.errors = null
            }).catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>
