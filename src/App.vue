<template>
  <router-view />
</template>
<script>
import { provide } from "vue";
import storeCVRSgen from "./store/cvrs/cvrs-general.js";
import storeCVRSMiFirstVisit from "./store/cvrs/cvrs-mi-first-visit.js";
import storeCVRSMiFollowUp from "./store/cvrs/cvrs-mi-follow-up.js";
import storeCVRSOphtalmoFirstVisit from "./store/cvrs/cvrs-ophtalmo-first-visit.js";
import storeCVLVgen from "./store/cvlv/cvlv-general.js";
import storeMTRLgen from "./store/mtrl-general.js";
import storeCVLVExoticsChoices from "./store/cvlv/exotique/cvlv-exotics-choices.js";
import storeCVLVExoticsBirds from "./store/cvlv/exotique/cvlv-exotics-birds.js";
import storeCVLVExoticsReptiles from "./store/cvlv/exotique/cvlv-exotics-reptiles.js";
import storeCVLVExoticsSmallAnimals from "./store/cvlv/exotique/cvlv-exotics-small-animals.js";
import storeCVLVExoticsFollowUp from "./store/cvlv/exotique/cvlv-exotics-follow-up.js";

export default {
  name: "App",
  setup() {
    provide("storeCVRSgen", storeCVRSgen);
    provide("storeCVRSMiFirstVisit", storeCVRSMiFirstVisit);
    provide("storeCVRSMiFollowUp", storeCVRSMiFollowUp);
    provide("storeCVRSOphtalmoFirstVisit", storeCVRSOphtalmoFirstVisit);
    provide("storeCVLVgen", storeCVLVgen);
    provide("storeMTRLgen", storeMTRLgen);
    provide("storeCVLVExoticsChoices", storeCVLVExoticsChoices);
    provide("storeCVLVExoticsBirds", storeCVLVExoticsBirds);
    provide("storeCVLVExoticsReptiles", storeCVLVExoticsReptiles);
    provide("storeCVLVExoticsSmallAnimals", storeCVLVExoticsSmallAnimals);
    provide("storeCVLVExoticsFollowUp", storeCVLVExoticsFollowUp);
    return {};
  },
};
</script>
