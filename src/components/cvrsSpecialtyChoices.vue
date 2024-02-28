<template>
  <div>
    <!-- Choose language -->
    <div
      class="box-btn-language"
      v-if="
        !storeCVRSSpecialtyChoices.state.language &&
        !storeCVRSSpecialtyChoices.state.specialty &&
        !storeCVRSSpecialtyChoices.state.typeRDV
      "
    >
      <div
        v-for="(language, index) in storeCVRSSpecialtyChoices.state.btnChoices
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
    <!-- Choose speciality -->
    <div
      class="box-btn-language"
      v-if="
        storeCVRSSpecialtyChoices.state.language &&
        !storeCVRSSpecialtyChoices.state.specialty &&
        !storeCVRSSpecialtyChoices.state.typeRDV
      "
    >
      <div
        v-for="(specialty, index) in storeCVRSSpecialtyChoices.state.btnChoices
          .specialty"
        :key="index"
        class="box-btn-exo"
      >
        <q-btn
          :label="specialty[storeCVRSSpecialtyChoices.state.language]"
          no-caps
          @click="inputChoice('specialty', specialty.res)"
          class="btn-exo"
        />
      </div>
    </div>
    <!-- Choose type of appointment -->
    <div
      class="box-btn-language"
      v-if="
        storeCVRSSpecialtyChoices.state.language &&
        storeCVRSSpecialtyChoices.state.specialty &&
        !storeCVRSSpecialtyChoices.state.typeRDV
      "
    >
      <div
        v-for="(typeRDV, index) in storeCVRSSpecialtyChoices.state.btnChoices
          .typeRDV"
        :key="index"
        class="box-btn-exo"
      >
        <q-btn
          :label="typeRDV[storeCVRSSpecialtyChoices.state.language]"
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
    const storeCVRSSpecialtyChoices = inject("storeCVRSSpecialtyChoices");
    const router = useRouter();

    function inputChoice(property, response) {
      storeCVRSSpecialtyChoices.state[property] = response;
      if (storeCVRSSpecialtyChoices.state.typeRDV) {
        if (storeCVRSSpecialtyChoices.state.language === "en") {
          router.push("/en");
        } else {
          router.push("/fr");
        }
      }
    }

    return { storeCVRSSpecialtyChoices, inputChoice };
  },
};
</script>

<style></style>
