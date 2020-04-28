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

export default {
    components: {AppBar},
}

</script>

<style>

</style>