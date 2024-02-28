<template>
  <q-page>
    <div class="box-logo">
      <!-- ********************* Choisir Logo -->
      <img
        src="../assets/cvlv-700px.png"
        alt="Logo du Centre Vétérinaire Laval"
        class="logo"
      />

      <!-- <img
        src="../assets/cvrs-700px.png"
        alt="Logo du Centre Vétérinaire Rive-Sud"
        class="logo"
      /> -->

      <!-- <img
        src="../assets/cvm_hop_complet_rouge.png"
        alt="Logo de l'hopital Veterinaire Centre Ville montreal"
        class="logo"
      /> -->
    </div>
    <!-- **************Choisir template -->
    <!-- ****** Template régulier -->
    <!-- <div class="box-btn-language">
      <q-btn label="Français" no-caps class="btn-language" to="/fr" />
      <q-btn label="English" no-caps class="btn-language" to="/en" />
    </div> -->
    <!-- ***** Template exotique -->
    <!-- <exotics-choices></exotics-choices> -->

    <!-- ***** Template CVRS specialty -->
    <!-- <cvrs-specialty-choices></cvrs-specialty-choices> -->

    <!-- ***** Template CVRS specialty -->
    <cvlv-specialty-choices></cvlv-specialty-choices>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import exoticsChoices from "src/components/exoticsChoices.vue";
import cvrsSpecialtyChoices from "src/components/cvrsSpecialtyChoices.vue";
import cvlvSpecialtyChoices from "src/components/cvlvSpecialtyChoices.vue";
export default defineComponent({
  components: { exoticsChoices, cvrsSpecialtyChoices, cvlvSpecialtyChoices },
  name: "PageIndex",
});

// Note: pour changer d'hopital =>

// mail.php
// - Vérifier que l'adresse vers le fichier mail.php soit OK dans le store
// - Vérifier que le bon fichier mail.php soit présent sur le site web et que celui-ci envoie vers la bonne adresse courriel

// Page index.vue
// - Modifier logo dans cette page
// Si spécialité cvrsSpecialtyChoices ou exotiques,
//    commenté les boutons français/anglais de cette page car seront en double sinon
//    Decommenté components <cvrs-specialty-choices> ou <exotics-choices>
// Le   cvlSpecialtyChoices utilise les stores cvrs spécialité, l'adresse courriel du CVL est dans le mail-form.php. J'ai enlever l'option Ophtlamo

// Store
// Changer path pour le store dans les pages francaise et anglaise
</script>
