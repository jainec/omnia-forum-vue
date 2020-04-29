<template>
    <!-- <v-app id="inspire" >
        <v-content>
        <v-container
            class="fill-height"
            fluid
            style="background-image: url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80');"
        >     -->
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
                    v-model="valid"
                    lazy-validation
                    @submit.prevent = "login"
                    >
                        <v-text-field
                            v-model="form.email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                            color="purple darken-2"
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
                            color="purple darken-2"
                        ></v-text-field>
                        
                        <v-btn
                            :disabled="!valid"
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
            <!-- </v-container>
        </v-content>
    </v-app> -->
</template>

<script>
  export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
        password: null,
        show1: false,
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        },
        form: {
            email: null,
            password: null
        }
    }),

    methods: {
        login () {
           
        },     
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
