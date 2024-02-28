<template>
  <div>
    <!-- Choose language -->
    <div
      class="box-btn-language"
      v-if="
        !storeCVLVSpecialtyChoices.state.language &&
        !storeCVLVSpecialtyChoices.state.typeRDV
      "
    >
      <div
        v-for="(language, index) in storeCVLVSpecialtyChoices.state.btnChoices
          .language"
        :key="index"
        class="box-btn-exo"
      >
        <q-btn
          :label="language.des"
          no-caps
          @click="inputChoice('language', language.res)"
          class="btn-exo"
        />
      </div>
    </div>

    <!-- Choose type of appointment -->
    <div
      class="box-btn-language"
      v-if="
        storeCVLVSpecialtyChoices.state.language &&
        !storeCVLVSpecialtyChoices.state.typeRDV
      "
    >
      <div
        v-for="(typeRDV, index) in storeCVLVSpecialtyChoices.state.btnChoices
          .typeRDV"
        :key="index"
        class="box-btn-exo"
      >
        <q-btn
          :label="typeRDV[storeCVLVSpecialtyChoices.state.language]"
          no-caps
          @click="inputChoice('typeRDV', typeRDV.res)"
          class="btn-exo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const storeCVLVSpecialtyChoices = inject("storeCVLVSpecialtyChoices");
    const router = useRouter();

    function inputChoice(property, response) {
      storeCVLVSpecialtyChoices.state[property] = response;
      if (storeCVLVSpecialtyChoices.state.typeRDV) {
        if (storeCVLVSpecialtyChoices.state.language === "en") {
          router.push("/en");
        } else {
          router.push("/fr");
        }
      }
    }

    return { storeCVLVSpecialtyChoices, inputChoice };
  },
};
</script>

<style></style>
