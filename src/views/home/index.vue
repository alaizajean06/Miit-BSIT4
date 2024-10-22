<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Ionic Components </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="light">
      <ion-list>
        <ion-item :button="true" @click="cardScreen()">
          <ion-label>
            <h2 class="text-bold">Card</h2>
            <p>
              Cards are containers that display content such as text, images,
              buttons, and lists.
            </p>
          </ion-label>
        </ion-item>
        <ion-item :button="true" @click="modalScreen()">
          <ion-label>
            <h2 class="text-bold">Modal</h2>
            <p>A Modal is a dialog that appears on top of the app's content.</p>
          </ion-label>
        </ion-item>
        <ion-item :button="true" @click="reorderScreen()">
          <ion-label>
            <h2 class="text-bold">Reorder</h2>
            <p>
              Reorder is a component that allows an item to be dragged to change
              its order.
            </p>
          </ion-label>
        </ion-item>
        <ion-item :button="true" @click="floatingactionbuttonScreen()">
          <ion-label>
            <h2 class="text-bold">Floating</h2>
            <p>
              Fabs are container elements that contain one or more fab buttons.
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
  IonFooter,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/vue';

export default defineComponent({
  name: 'IndexScreen',
  components: {
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
    IonFooter,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
  methods: {
    async cardScreen() {
      this.$router.push('/card');
    },
    async modalScreen() {
      this.$router.push('/modal');
    },
    async reorderScreen() {
      this.$router.push('/reorder');
    },
    async floatingactionbuttonScreen() {
      this.$router.push('/floatingactionbutton');
    },
  },
});
</script>