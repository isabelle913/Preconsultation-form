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
    specialty: [
      { fr: "Ophtalmogie", en: "Ophthalmology", res: "ophtalmo" },
      { fr: "Medecine interne", en: "Internal Medecine", res: "medecine" },
    ],
    typeRDV: [
      { fr: "Premier rendez-vous", en: "First appointment", res: "FirstVisit" },
      { fr: "Rendez-vous de suivi", en: "Follow-Up", res: "FollowUp" },
    ],
  },
});

/*
Choix:
medecine first visit
medecine followUp
ophtalmo


Dans page francaise ou anglaise sélectionne le template avec cette expression
`storeCVRSpecialtyChoices${storeCVRSpecialtyChoices.getters.storeTemplate()}`

Store disponibles:
provide("storeCVRSMedecineFirstVisit", storeCVRSMedecineFirstVisit);
provide("storeCVRSMedecineFollowUp", storeCVRSMedecineFollowUp);
provide("storeCVRSOphtalmoFirstVisit", storeCVRSOphtalmoFirstVisit);
*/

const getters = {
  storeTemplate() {
    if (state.specialty === "ophtalmo") {
      return `OphtalmoFirstVisit`;
    } else if (state.specialty === "medecine") {
      return `Medecine${state.typeRDV}`;
    } else {
      return `MedecineFirstVisit`;
    }
  },
};

export default { state, getters };
