<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import {X} from 'lucide-vue-next'

const {notifications,removeNotification} = useNotifications();

</script>

<template>
    <Teleport to="body">
        <ol class="notification-list">
            <li v-for="notification in notifications" 
            :key="notification.id" 
            class="notification-item">
            <div class="text-sm font-semibold ">
                {{ notification.message }}
            </div>
            <button class="notification-ack-button" @click="removeNotification(notification.id)">
                <X />
            </button>
            </li>
        </ol>
    </Teleport>
</template>