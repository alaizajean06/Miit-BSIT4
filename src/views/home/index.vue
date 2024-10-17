<template>
    <ion-page>
        <ion-header>
         <ion-Toolbar>
         <ion-title>Home Screen</ion-title>
         </ion-Toolbar>
        </ion-header>
        <ion-content>
          
        </ion-content>
    </ion-page>
</template>
<script lang="ts">

import { defineComponent, DefineComponent } from 'vue';
import { IonToolbar, IonTitle, IonHeader, IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
    name: "IndexScreen",
    components: { IonToolbar, IonTitle, IonHeader, IonPage, IonContent },
    methods: {
        async nextScreen() {
            this.$router.push('/signin');
        }
    }
});
</script>