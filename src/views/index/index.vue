<template>
    <ion-page>
        <ion-header>
         <ion-Toolbar>
         <ion-title>Index Page</ion-title>
         </ion-Toolbar>
        </ion-header>
        <ion-content>
          
        </ion-content>
        <ion-footer>
         <ion-Toolbar>
            <button slot="end" class="btn btn-primary w-45" @click="nextScreen()">Next</button>
         </ion-Toolbar>
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">

import { defineComponent, DefineComponent } from 'vue';
import { IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent({
    name: "IndexScreen",
    components: { IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
    methods: {
        async nextScreen() {
            this.$router.push('/signin');
        }
    }
});
</script>