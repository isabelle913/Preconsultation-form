<template>
  <div>
    <!-- Choose language -->
    <div
      class="box-btn-language"
      v-if="
        !storeExo.state.language &&
        !storeExo.state.species &&
        !storeExo.state.typeRDV
      "
    >
      <div
        v-for="(language, index) in storeExo.state.btnChoices.language"
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
      <!-- <q-btn
        label="Français"
        no-caps
        class="btn-language"
        @click="inputChoice('language', 'fr')"
      />
      <q-btn
        label="English"
        no-caps
        class="btn-language"
        @click="inputChoice('language', 'en')"
      /> -->
    </div>
    <!-- Choose species -->
    <div
      class="box-btn-language"
      v-if="
        storeExo.state.language &&
        !storeExo.state.species &&
        !storeExo.state.typeRDV
      "
    >
      <div
        v-for="(species, index) in storeExo.state.btnChoices.species"
        :key="index"
        class="box-btn-exo"
      >
        <q-btn
          :label="species[storeExo.state.language]"
          no-caps
          @click="inputChoice('species', species.res)"
          class="btn-exo"
        />
      </div>

      <!-- <q-btn
        label="Reptiles"
        no-caps
        class="btn-language-exo"
        @click="inputChoice('species', 'Reptiles')"
      />
      <q-btn
        label="Oiseaux"
        no-caps
        class="btn-language-exo"
        @click="inputChoice('species', 'Birds')"
      />
      <q-btn
        label="Petits mammifères"
        no-caps
        class="btn-language-exo"
        @click="inputChoice('species', 'SmallAnimals')"
      /> -->
    </div>
    <!-- Choose type of appointment -->
    <div
      class="box-btn-language"
      v-if="
        storeExo.state.language &&
        storeExo.state.species &&
        !storeExo.state.typeRDV
      "
    >
      <div
        v-for="(typeRDV, index) in storeExo.state.btnChoices.typeRDV"
        :key="index"
        class="box-btn-exo"
      >
        <q-btn
          :label="typeRDV[storeExo.state.language]"
          no-caps
          @click="inputChoice('typeRDV', typeRDV.res)"
          class="btn-exo"
        />
      </div>
      <!-- <q-btn
        label="Nouveau rendez-vous"
        no-caps
        class="btn-language"
        @click="inputChoice('typeRDV', 'first')"
      />
      <q-btn
        label="Rendez-vous de suivi"
        no-caps
        class="btn-language"
        @click="inputChoice('typeRDV', 'followUp')"
      />-->
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const storeExo = inject("storeCVLVExoticsChoices");
    const router = useRouter();

    function inputChoice(property, response) {
      storeExo.state[property] = response;
      if (storeExo.state.typeRDV) {
        if (storeExo.state.language === "en") {
          router.push("/en");
        } else {
          router.push("/fr");
        }
      }
    }

    return { storeExo, inputChoice };
  },
};
</script>

<style></style>
