<template>
  <q-page class="flex flex-center">
    <div class="box-text-welcome">
      <p class="text-welcome">Bonjour et bienvenue au</p>
      <p class="text-welcome">Centre Vétérinaire Laval</p>
      <p class="text-welcome">Veuillez choisir votre language</p>
      <h3 class="text-welcome">
        Hello and welcome to Centre Vétérinaire Laval, please choose your
        language
      </h3>
    </div>
    <div class="box-btn-language">
      <q-btn label="Français" class="btn" to="/fr" />
      <q-btn label="Anglais" class="btn" to="/en" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
