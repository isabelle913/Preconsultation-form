<template>
  <router-view />
</template>
<script>
import { provide } from "vue";

import storeCVRSgen from "./store/cvrs/cvrs-general.js";
import storeCVRSSpecialtyChoices from "./store/cvrs/specialty/cvrs-specialty-choices.js";
import storeCVRSMedecineFirstVisit from "./store/cvrs/specialty/cvrs-medecine-first-visit.js";
import storeCVRSMedecineFollowUp from "./store/cvrs/specialty/cvrs-medecine-follow-up.js";
import storeCVRSOphtalmoFirstVisit from "./store/cvrs/specialty/cvrs-ophtalmo-first-visit.js";

import storeCVLVgen from "./store/cvlv/cvlv-general.js";
import storeCVLVSpecialtyChoices from "./store/cvlv/specialty/cvlv-specialty-choices.js";
import storeCVLVExoticsChoices from "./store/cvlv/exotique/cvlv-exotics-choices.js";
import storeCVLVExoticsBirds from "./store/cvlv/exotique/cvlv-exotics-birds.js";
import storeCVLVExoticsReptiles from "./store/cvlv/exotique/cvlv-exotics-reptiles.js";
import storeCVLVExoticsSmallAnimals from "./store/cvlv/exotique/cvlv-exotics-small-animals.js";
import storeCVLVExoticsFollowUp from "./store/cvlv/exotique/cvlv-exotics-follow-up.js";

import storeMTRLgen from "./store/mtrl-general.js";

export default {
  name: "App",
  setup() {
    provide("storeCVRSgen", storeCVRSgen);
    provide("storeCVRSSpecialtyChoices", storeCVRSSpecialtyChoices);
    provide("storeCVRSMedecineFirstVisit", storeCVRSMedecineFirstVisit);
    provide("storeCVRSMedecineFollowUp", storeCVRSMedecineFollowUp);
    provide("storeCVRSOphtalmoFirstVisit", storeCVRSOphtalmoFirstVisit);

    provide("storeCVLVgen", storeCVLVgen);
    provide("storeCVLVSpecialtyChoices", storeCVLVSpecialtyChoices);
    provide("storeCVLVExoticsChoices", storeCVLVExoticsChoices);
    provide("storeCVLVExoticsBirds", storeCVLVExoticsBirds);
    provide("storeCVLVExoticsReptiles", storeCVLVExoticsReptiles);
    provide("storeCVLVExoticsSmallAnimals", storeCVLVExoticsSmallAnimals);
    provide("storeCVLVExoticsFollowUp", storeCVLVExoticsFollowUp);

    provide("storeMTRLgen", storeMTRLgen);
    return {};
  },
};
</script>
