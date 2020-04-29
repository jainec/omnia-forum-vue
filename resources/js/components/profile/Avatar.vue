<template>      
    <v-hover>
        <template v-slot:default="{ hover }">
            <v-avatar color="orange" size="230">
                <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                 <v-fade-transition>
                    <v-overlay
                        v-if="hover"
                        absolute                        
                    >
                        <v-btn 
                            color="primary" 
                            fab 
                            dark                            
                            @click="onButtonClick"
                        >
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <input
                            ref="uploader"
                            class="d-none"
                            type="file"
                            accept="image/*"
                            @change="onFileChanged"
                        >
                    </v-overlay>
                </v-fade-transition>
            </v-avatar>   
        </template>
    </v-hover>    
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),
    methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, { once: true })

      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]
      
      // do something
    }}
  }
</script>

<style>

    .profile-avatar:hover {
        

    }

</style>
