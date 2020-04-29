<template>  
    <v-card class="pl-5 pr-2">
        <section-header :myTitle="title" ></section-header>
        <div class="pr-4"><v-divider></v-divider></div>
        <v-div class="pa-2">
            <v-textarea
            outlined
            class="pr-3"
            name="input-7-4"
            label="Outlined textarea"
            color="purple darken-2"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
        </v-div>
    </v-card>           
</template>

<script>

import SectionHeader from './SectionHeader'

export default {
    components: {SectionHeader},
    data: function() {
        return {
            title: 'Biography',
        };
    }
}
</script>

<style>

</style>
