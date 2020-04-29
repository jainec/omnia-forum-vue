<template>
    <v-div class="data-header">
        <v-row>
            <v-col
                col="12"
                md="10"
            >
                <h3 class="pt-2">{{ myTitle }}</h3>
            </v-col>

            <v-col
                col="12"
                md="2"
                align="end"
                class="mb-1"                
            >
                <v-btn color="purple darken-2" dark>Save</v-btn>
            </v-col>
        </v-row>                                                
    </v-div>
</template>

<script>
export default {
    props: {
        myTitle: String,
    }
}
</script>

<style>

    .v-btn {
        text-transform: none;        
    }

</style>
