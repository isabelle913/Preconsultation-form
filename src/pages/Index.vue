<template>
  <q-page>
    <div class="box-logo">
      <!-- <img
        src="../assets/cvlv-700px.png"
        alt="Logo du Centre Vétérinaire Laval"
        class="logo"
      /> -->

      <!-- <img
        src="../assets/cvrs-700px.png"
        alt="Logo du Centre Vétérinaire Rive-Sud"
        class="logo"
      /> -->

      <img
        src="../assets/cvm_hop_complet_rouge.png"
        alt="Logo de l'hopital Veterinaire Centre Ville montreal"
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

// Note: pour changer d'hopital =>
// Modifier fichier mail.php qui doit être mit dans dossier _outilsinternes directement sinon modifier path dans les pages française et anglaise.
// Modifier logo dans cette page
</script>
