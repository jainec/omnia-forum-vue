<template>
    <v-card class="elevation-2">
        <!-- <v-card-title class="headline">Lorem ipsum</v-card-title> -->
        <v-list-item three-line>
            <v-list-item-avatar color="grey"><v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img></v-list-item-avatar>
            <v-list-item-content>
            <!-- <v-list-item-title class="font-question"><b>What is your favorite programming language?</b></v-list-item-title> -->
            <v-list-item-subtitle>by {{reply.user}}</v-list-item-subtitle>
            <v-list-item-subtitle>Posted {{reply.created_at}}</v-list-item-subtitle>
            </v-list-item-content>                  
        </v-list-item>
        <v-card-text>
            {{reply.description}}
        </v-card-text>
        <v-row
        align="center"
        justify="end"
        class="mr-1"
        >            
            <v-btn icon>
            <v-icon>mdi-heart</v-icon>
            </v-btn>
            <span class="mr-2 like">{{reply.number_likes}}</span>
        </v-row>                
    </v-card>
</template>

<script>
export default {
    props: ['reply']
}
</script>

<style>

</style>
