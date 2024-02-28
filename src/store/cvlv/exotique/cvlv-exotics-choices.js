"use strict";

import { reactive } from "vue";

const state = reactive({
  language: "",
  species: "",
  typeRDV: "",
  btnChoices: {
    language: [
      { des: "Français", res: "fr" },
      { des: "English", res: "en" },
    ],
    species: [
      { fr: "Reptiles", en: "Reptiles", res: "Reptiles" },
      { fr: "Oiseaux", en: "Birds", res: "Birds" },
      { fr: "Petits mammifères", en: "Small animals", res: "SmallAnimals" },
    ],
    typeRDV: [
      { fr: "Nouveau rendez-vous", en: "New appointment", res: "first" },
      { fr: "Rendez-vous de suivi", en: "Follow-Up", res: "FollowUp" },
    ],
  },
});

/*
Choix:
Reptiles
Oiseaux
Petits mammifères
Follow-up même formulaire pour tous

Dans page francaise ou anglaise sélectionne le template avec cette expression
`storeCVLVExotics${storeExo.getters.storeTemplate()}`

Store disponibles:
provide("storeCVLVExoticsBirds", storeCVLVExoticsBirds);
provide("storeCVLVExoticsReptiles", storeCVLVExoticsReptiles);
provide("storeCVLVExoticsSmallAnimals", storeCVLVExoticsSmallAnimals);
provide("storeCVLVExoticsFollowUp", storeCVLVExoticsFollowUp);
*/

const getters = {
  storeTemplate() {
    if (state.typeRDV === "first") {
      return state.species;
    } else {
      return `FollowUp`;
    }
  },
};

export default { state, getters };
