<template>
    <v-form @submit.prevent="edit">
        <v-text-field
            label="Name"
            single-line
            color="purple darken2"
            v-model="form.name"
        ></v-text-field>
        <v-btn
            icon
            color="green"
            type="submit"
        >
            <span class="material-icons">save</span>
        </v-btn>
    </v-form>
</template>

<script>
    export default {
        props: ['category', 'index'],
        data() {
            return {
                form: {
                    name: null,
                    id: null,
                },
            }
        },

        created() {
            this.form = Vue.util.extend({}, this.category)
        },

        methods: {
            edit() {
                axios.patch(`http://127.0.0.1:8000/api/categories/${this.category.id}`, this.form)
                .then(res => EventBus.$emit('edited', this.form, this.index))
                .catch(error => this.errors = error.response.data.error)
            }
        }
    }
</script>