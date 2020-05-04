<template>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn        
          icon
          v-on="on"
        >
            <v-badge
                :content="unread_count"        
                color="red"
                overlap
                v-if="hasNotification"
            >
                <v-icon large>mdi-bell</v-icon>
            </v-badge>
            <v-icon v-else large>mdi-bell</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(notification, index) in unread"
          :key="index"
          @click="readNotifications(notification, index)"
        >
            <router-link :to="notification.data.path">
                <v-list-item-title>{{ notification.data.question }}</v-list-item-title>
            </router-link>    
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>

export default {
    data() {
        return {            
            read: {},
            unread: {},
            unread_count: 0,
        }
    },

    computed: {
        hasNotification() {
            return this.unread_count == 0 ? false : true;
        }
    },

    created() {
        if(User.loggedIn()) {
            this.getNotifications()
        }
    },

    methods: {
        getNotifications() {
            axios.post('http://127.0.0.1:8000/api/notifications')
            .then(res => {
                this.read = res.data.read
                this.unread = res.data.unread
                this.unread_count = res.data.unread.length
            })
            .catch(error => Exception.handle(error))
        },

        readNotifications(notification, index) {
            axios.post(`http://127.0.0.1:8000/api/notification/${notification.id}/markAsRead`)
            .then(res => {
                this.read.push(notification)
                this.unread.splice(index, 1)
                this.unread_count--
            })
        }
    }
}
</script>
