<script setup lang="ts">

import type { Tab,TabKey } from '@/types';
import TabLink from '@/components/TabLink.vue';

import { ref,computed } from 'vue';

import GeneralSettings from '@/components/GeneralSettings.vue';
import NotificationSettings from '@/components/NotificationSettings.vue';
import PrivacySettings from '@/components/PrivacySettings.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import NotificationList from './components/NotificationList.vue';

const tabs: Tab[] = [
    {
        key: 'General',
        label: 'General',
        component: GeneralSettings
    },
    {
        key: 'Notifications',
        label: 'Notifications',
        component: NotificationSettings
    },
    {
        key: 'Privacy',
        label: 'Privacy',
        component: PrivacySettings
    }
]

const currentTab = ref<TabKey>('General')
const currentComponent = computed(() => tabs.find(
  tab => tab.key === currentTab.value)?.component
)

</script>

<template>
  <main class="max-w-2xl px-4">
      <nav class="font-medium text-center border-b 
       mb-4 text-gray-600 text-2xl">
      <ul class="flex flex-wrap -mb-px">
          <li v-for="tab in tabs" :key="tab.key">
               <TabLink :tab="tab" :current-tab="currentTab" 
               @click="currentTab=tab.key"/>
          </li>
      </ul>
      </nav>
      <FadeTransition>
        <KeepAlive>
          <component :is="currentComponent"/>
        </KeepAlive>
        
      </FadeTransition>
      <NotificationList/>
      
  </main>
</template>