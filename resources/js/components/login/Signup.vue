<template>
    <v-card
        class="mx-auto logo"
        max-width="550"
        outlined
        
    >          
        <div class="overline px-8 pt-6 pb-5">
            <h1 class=""><v-img :src="'img/omnia.PNG'" width="250" class="logo"></v-img></h1>
            <p style="font-size: 13px;" class="mt-5 d-flex justify-center">Sign up</p>
        </div>
                
        <v-form class="px-10 pb-5"
            ref="form"            
            lazy-validation
            @submit.prevent = "signup"
            >
            <v-row>
                <v-col
                    cols="12"
                    md="6"                    
                    class="pt-0"
                >
                <v-text-field
                    v-model="form.name"               
                    color="purple darken-2"
                    label="First name"                    
                    type="text"
                ></v-text-field>
                <small v-if="errors.name" class="red--text">Required</small>
                </v-col>
                  <v-col
                    cols="12"
                    md="6"   
                    class="pt-0"                 
                >
                <v-text-field
                    v-model="form.surname"   
                    color="purple darken-2"
                    label="Last name"                    
                ></v-text-field>
                <small v-if="errors.surname" class="red--text">Required</small>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="pt-0"
                >
                <v-text-field
                    v-model="form.nickname"                    
                    color="purple darken-2"
                    label="Nickname"                    
                ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="pt-0"
                >
                <v-text-field
                    v-model="form.email"
                    :rules="[rules.email]"
                    label="E-mail"
                    type="email"
                    color="purple darken-2"
                ></v-text-field>
                <small v-if="errors.email" class="red--text">Required</small>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="pt-0"
                >
                <v-text-field
                    v-model="form.password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                    color="purple darken-2"
                ></v-text-field>
                <small v-if="errors.surname" class="red--text">{{errors.password[0]}}</small>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="pt-0"
                >
                <v-text-field
                    v-model="form.password_confirmation"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Repeat password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show2 = !show2"
                    color="purple darken-2"
                ></v-text-field>
                </v-col>
            </v-row>                       
            
            <v-btn                
                color="primary"                        
                class="mr-4"
                type="submit"                              
            >
                Sign up
                </v-btn>

            <div class="d-flex justify-center">
                Do you have an account?	&nbsp;<router-link to='login'> Sign in</router-link>
            </div>
        </v-form>
        
        <v-divider ></v-divider>

        <v-footer>
            <v-spacer></v-spacer>
            <v-col
                class="text-center"
                cols="12"
            >
            <div>Jaine Conceição &copy; {{ new Date().getFullYear() }}</div>
            </v-col>
        </v-footer>
    </v-card>                            
</template>

<script>

  export default {
    data() {
        return {
            show1: false,
            show2: false,
            form: {
                email: null,
                password: null,
                name: null,
                surname: null,
                password_confirmation: null,
            },
            rules: {
                required: value => !!value || 'Required.',               
                min: v => v.length >= 8 || 'Min 8 characters', 
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            },
            errors: {},                          

        }
    },

     created() {
        if(User.loggedIn())
            this.$router.push({name: 'home'});
    },

    methods: {
        signup() {
           axios.post('http://127.0.0.1:8000/api/auth/signup', this.form)
           .then(res => {
               User.responseAfterLogin(res)
               this.$router.push({name: 'home'})
            })
           .catch(error => this.errors = error.response.data.errors)
        }
    },

  }
</script>

<style>

    .padding20-sides {
        padding-left: 20px;
        padding-right: 20px;
    }

    .padding20-bottom {
        padding-bottom: 20px;
    }

    .logo {
         
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }


</style>
