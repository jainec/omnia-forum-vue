<template>
    <v-card>
        <v-row class="pa-2 text-center">
            <v-col>
                <span class="number-analytics">0</span><br>questions
            </v-col>
            <v-divider
              class="mx-4"
              vertical
            ></v-divider>
            <v-col>
                <span class="number-analytics">0</span><br>answers
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>

    .number-analytics {
        font-size: 25px;
        font-weight: bold;  
        color: #7B1FA2;      
    }

    .text-center {
        text-align: center;
    }

</style>
