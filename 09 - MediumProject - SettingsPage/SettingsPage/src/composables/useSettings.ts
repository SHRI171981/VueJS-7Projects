import {ref, watch} from 'vue';

type Visibility = 'public' | 'private'

interface SettingsMap {
    general: GeneralSettings,
    privacy: PrivacySettings,
    notifications: NotificationSettings
};

type SettingsKey = keyof SettingsMap;

interface GeneralSettings {
    username: string,
    email: string,
    about: string,
    gender: string,
    country: string
}

interface NotificationSettings {
    email: boolean;
    sms: boolean
}

interface PrivacySettings {
    visibility: Visibility;
    searchEngineIndexing: boolean
}

const init = <T extends SettingsKey>(key: T,defaults: SettingsMap[T]) => {
    const stored = localStorage.getItem(key);
    return stored !== null
    ? JSON.parse(stored)
    : defaults;
}

const general = ref<GeneralSettings>(
    init('general',{ // else return default vals
        about: '',
        country: 'USA',
        gender: 'male',
        email: '',
        username: ''
    }
));

const notifications = ref<NotificationSettings>(
    init('notifications',{
        email: false,
        sms: false
    }
));

const privacy = ref<PrivacySettings>(
    init('privacy',{
        searchEngineIndexing: false,
        visibility: 'private'
    }
));

const watcher = 
    <T extends SettingsKey>(key: T) => 
        (value: SettingsMap[T]) => 
            {
            localStorage.setItem(key,JSON.stringify(value))
            };    

watch(general, watcher('general'),{deep: true})
watch(notifications, watcher('notifications'),{deep: true})
watch(privacy, watcher('privacy'),{deep: true})




export function useSettings(){
    return {
        general,
        notifications,
        privacy
    }
}

