<template>
  <div id="div-categories">
    <v-card
      class="mt-3"
      max-width="300"
      tile
      fixed      
    >
      <v-list dense>
        <v-subheader class="pa-4">CATEGORIES</v-subheader>        
        <v-list-item-group v-model="item" color="purple darken-2">
          
          <v-list-item           
            key=0
          >
            <v-list-item-icon>
              <span class="material-icons">list</span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Todas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-for="(category, index) in categories"
            :key="category.id"
          >
            <v-list-item-icon>
              <span class="material-icons">list</span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-row>
                <v-col>
                  <v-list-item-title v-if="!show_edit" v-text="category.name"></v-list-item-title>
                  <edit-category v-if="show_edit" :category="category"></edit-category>
                </v-col>
                <v-col v-if="admin">
                  <v-btn 
                    icon
                    color="yellow"
                    @click="edit"
                  >
                    <span class="material-icons">edit</span> 
                  </v-btn>
                </v-col>
                <v-col v-if="admin">
                  <v-btn 
                    icon
                    color="red"
                    @click="destroy(category.id, index)"
                  >
                    <span class="material-icons">delete</span> 
                  </v-btn>
                </v-col>
              </v-row>

            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import EditCategory from '../category/EditCategory'
  export default {
    components: {EditCategory},
    data() {
      return {
        item: 0,
        categories: {},
        show_edit: false,
        admin: User.admin(),
      }
    },

    created() {
      axios.get('http://127.0.0.1:8000/api/categories')
      .then(res => this.categories = res.data.data)      
    },

    updated() {
      this.listen()
    },

    methods: {
      destroy(id, index) {
        axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
        .then(res => this.categories.splice(index, 1));
      },      

      edit() {
        this.show_edit = !this.show_edit;
      },

      listen() {
        EventBus.$on('edited', () => {
          this.show_edit = false;
        });
      },
    }
  }
</script>

<style>
  
</style>
