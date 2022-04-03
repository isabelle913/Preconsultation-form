<template>
  <router-view />
</template>
<script>
import { provide } from "vue";
import storeCVRSgen from "./store/cvrs/cvrs-general.js";
import storeCVRSMiFirstVisit from "./store/cvrs/cvrs-mi-first-visit.js";
import storeCVRSMiFollowUp from "./store/cvrs/cvrs-mi-follow-up.js";
import storeCVLVgen from "./store/cvlv-general.js";
import storeMTRLgen from "./store/mtrl-general.js";

export default {
  name: "App",
  setup() {
    provide("storeCVRSgen", storeCVRSgen);
    provide("storeCVRSMiFirstVisit", storeCVRSMiFirstVisit);
    provide("storeCVRSMiFollowUp", storeCVRSMiFollowUp);
    provide("storeCVLVgen", storeCVLVgen);
    provide("storeMTRLgen", storeMTRLgen);
    return {};
  },
};
</script>
