<template>
  <q-page>
    <div class="box-logo">
      <!-- ********************* Choisir Logo -->
      <!-- <img
        src="../assets/cvlv-700px.png"
        alt="Logo du Centre Vétérinaire Laval"
        class="logo"
      /> -->

      <img
        src="../assets/cvrs-700px.png"
        alt="Logo du Centre Vétérinaire Rive-Sud"
        class="logo"
      />

      <!-- <img
        src="../assets/cvm_hop_complet_rouge.png"
        alt="Logo de l'hopital Veterinaire Centre Ville montreal"
        class="logo"
      /> -->
    </div>
    <!-- **************Choisir template regulier ou exotique -->
    <!-- ****** Template régulier -->
    <div class="box-btn-language">
      <q-btn label="Français" no-caps class="btn-language" to="/fr" />
      <q-btn label="English" no-caps class="btn-language" to="/en" />
    </div>
    <!-- ***** Template exotique -->
    <!-- <exotics-choices></exotics-choices> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import exoticsChoices from "src/components/exoticsChoices.vue";

export default defineComponent({
  components: { exoticsChoices },
  name: "PageIndex",
});

// Note: pour changer d'hopital =>
// - Modifier fichier mail.php qui doit être mit dans dossier _outilsinternes directement sinon modifier path dans les pages française et anglaise.
// - Vérifier path pour le fichier mail dans la fonction dans le store utilisé
// - Modifier logo dans cette page

// - Note pour les exotiques du CVL
// - Activer/désactiver component exotics choices
</script>
