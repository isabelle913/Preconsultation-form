"use strict";

import { reactive } from "vue";

const state = reactive({
  language: "",
  specialty: "",
  typeRDV: "",
  btnChoices: {
    language: [
      { des: "Français", res: "fr" },
      { des: "English", res: "en" },
    ],

    typeRDV: [
      { fr: "Premier rendez-vous", en: "First appointment", res: "FirstVisit" },
      { fr: "Rendez-vous de suivi", en: "Follow-Up", res: "FollowUp" },
    ],
  },
});

const getters = {
  storeTemplate() {
    if (state.specialty === "medecine") {
      return `Medecine${state.typeRDV}`;
    } else {
      return `MedecineFirstVisit`;
    }
  },
};

export default { state, getters };
