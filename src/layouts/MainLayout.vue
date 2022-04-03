<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="toolbar-title" v-if="english">
          <div>Pre-Consultation Form</div>
          <!-- <div>pré-consultation</div> -->
        </q-toolbar-title>
        <q-toolbar-title class="toolbar-title" v-else>
          <div>Votre formulaire</div>
          <div>pré-consultation</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="toolbar-title">
          <div>Centre Vétérinaire Laval - Vet et Nous</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      english: false,
    };
  },

  updated() {
    const reg = /en$/g;
    if (reg.test(window.location.href)) {
      this.english = true;
    } else {
      this.english = false;
    }
  },
});
</script>
