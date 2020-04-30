<template>
    <v-card
        class="mx-auto logo"
        max-width="550"
        outlined
        
    >          
        <div class="overline px-8 pt-6 pb-5">
            <h1 class=""><v-img :src="'img/omnia.PNG'" width="250" class="logo"></v-img></h1>
            <p style="font-size: 13px;" class="mt-5">A place to ask, answer and know about everything</p>
        </div>
                
        <v-form class="px-10 pb-5"
            ref="form"            
            lazy-validation
            @submit.prevent = "login"
            >
            <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="E-mail"
                type="email"
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>
            
            <v-btn                
                color="primary"                        
                class="mr-4"
                type="submit"                              
            >
                Login
                </v-btn>
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
            form: {
                email: null,
                password: null,
            },
            rules: {
                required: value => !!value || 'Required.',               
                min: v => v.length >= 8 || 'Min 8 characters', 
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
          },
        }
    },

    methods: {
        login() {
           User.login(this.form)
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
