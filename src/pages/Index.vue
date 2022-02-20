<template>
  <q-page>
    <div class="box-logo">
      <!-- <img
        src="../assets/cvl500px.png"
        alt="Logo du Centre Vétérinaire Laval"
      /> -->
      <img
        src="../assets/CVL_complet_rouge.png"
        alt="Logo du Centre Vétérinaire Laval"
        class="logo"
      />
    </div>

    <div class="box-btn-language">
      <q-btn label="Français" no-caps class="btn-language" to="/fr" />
      <q-btn label="English" no-caps class="btn-language" to="/en" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
