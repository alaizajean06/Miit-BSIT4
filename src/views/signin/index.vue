<template>
    <ion-page>
        <ion-content>
          <ion-grid>
            <ion-row>
              <ion-col class="ion-text-center">
                <img src="../../assets/ionic-logo.webp" alt="" width="180">
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
        <ion-content class="ion-padding">
          <div style="padding-top: -1;">
  <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
</div>
        </ion-content>
        <ion-footer>
         <ion-Toolbar>
            <button slot="end" class="btn btn-primary w-50">sign in</button>
         </ion-Toolbar>
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">

import { defineComponent, DefineComponent } from 'vue';
import { IonBackButton, IonButton, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';
import { add } from 'ionicons/icons';

export default defineComponent({
    name: "IndexScreen",
    components: { IonBackButton, IonButton, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
});
</script>
