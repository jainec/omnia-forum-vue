<template>
    <v-card class="pl-5 pr-2">
        <section-header :myTitle="title"></section-header>
        <div class="pr-4"><v-divider></v-divider></div>
        <v-div class="pa-2">
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-text-field
                        label="Name"
                        placeholder="Placeholder"
                        outlined
                        dense
                        color="purple darken-2"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-text-field
                        label="Surname"
                        placeholder="Placeholder"
                        outlined
                        dense
                        color="purple darken-2"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-text-field
                        label="Nickname"
                        placeholder="Placeholder"
                        outlined
                        dense
                        color="purple darken-2"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >   
                    <v-text-field
                        label="E-mail"
                        placeholder="Placeholder"
                        outlined
                        dense
                        color="purple darken-2"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-div>
    </v-card>        
</template>

<style>
    .pl-5 .pr-2 .v-card .v-sheet .theme--light {
        padding: 0px;
    }

</style>


<script>
import SectionHeader from './SectionHeader'
export default {
    components: {SectionHeader},

    data: function() {
        return {
            title: 'Basic Information',
            profile: {},
        };
    },
            
}
</script>
