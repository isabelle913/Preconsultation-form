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
