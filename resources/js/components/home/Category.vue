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
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
  }
</script>

<style>
  
</style>
