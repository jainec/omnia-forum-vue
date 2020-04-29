<template>
    <v-app-bar fixed app color="white" height="48">
        <div style="width: 100%; height: 48px;" class="d-flex justify-center white">
            <div class="" style="width: 70%;">
                <v-row>
                    <div style="width: 12%; height: 48px;" class="">
                        <router-link to='/home'>
                            <v-img :src="'img/omnia.PNG'" width="120"></v-img>
                        </router-link>
                    </div>
                    <div style="width: 10%; height: 48px;" class=" d-flex justify-center align-center">
                        <router-link to='/home'>
                            <h2 class="home-appbar">Home</h2>
                        </router-link>
                    </div>
                    <div style="width: 40%; height: 48px;" class=" ml-10 mr-10 mt-1"> 
                        <v-text-field
                        color="purple darken-2"
                        outlined          
                        append-icon="search"
                        placeholder="Search"   
                        dense
                        ></v-text-field>
                    </div>
                    <div style="width: 5%; height: 48px;" class="d-flex justify-center align-center">                         
                        <span class="material-icons">notification_important</span>                        
                    </div>
                    <div style="width: 5%; height: 48px;" class="d-flex justify-center align-center">                 
                        <v-menu
                            left
                            bottom
                        >
                            <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <v-avatar color="teal" size="30">
                                <span class="white--text headline">48</span>
                                </v-avatar>
                            </v-btn>
                            </template>
                            <v-list>
                            <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/profile">My profile</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>My questions</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>

                    <div style="width: 15%; height: 48px;" class="d-flex justify-center align-center "> 
                        <!-- <Question></Question> -->
                         <router-link to="/login">Login</router-link>
                    </div>

                    <div style="width: 5%; height: 48px;" class="d-flex justify-end align-center"> 
                        <v-btn icon>
                            <span class="material-icons">exit_to_app</span>  
                        </v-btn>
                    </div>

                </v-row>                
            </div>        
        </div>            
        <!-- <v-divider></v-divider> -->
    </v-app-bar>
  
</template>

<script>

// import Question from './question/Question'

export default {
    components: {}
}
</script>

<style>

   
</style>
