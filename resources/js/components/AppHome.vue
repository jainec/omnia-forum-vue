<template>
    <v-app>
        <app-bar></app-bar>
        <v-content>
            <v-container>                            
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

import AppBar from './AppBar'
import MainHome from './home/MainHome'

export default {
    components: {AppBar, MainHome},
}

</script>

<style>

</style>