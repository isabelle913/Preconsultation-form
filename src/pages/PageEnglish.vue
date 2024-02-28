<template>
  <q-page class="page">
    <q-form @submit.prevent="store.methods.onSubmit">
      <!-- information client -->
      <p class="text-instruction">Your Information</p>
      <div class="information-container">
        <div class="information-element">
          <label>{{
            store.state.informationClient.clientName.questionE
          }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.clientName.response"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something ',
            ]"
          />
        </div>
        <div class="information-element">
          <label>{{
            store.state.informationClient.patientName.questionE
          }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.patientName.response"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something ',
            ]"
          />
        </div>
      </div>
      <div class="information-container">
        <div class="information-element">
          <label>{{
            store.state.informationClient.phoneNumber.questionE
          }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.phoneNumber.response"
            type="tel"
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something ',
            ]"
          />
        </div>
        <div class="information-element">
          <label>{{ store.state.informationClient.dossierID.questionE }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.dossierID.response"
            type="number"
            clearable
          />
        </div>
        <div class="information-element">
          <label>{{
            store.state.informationClient.clientEmail.questionE
          }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.clientEmail.response"
            type="email"
            clearable
          />
        </div>
      </div>
      <div class="separator-red q-mt-xl"></div>

      <!-- section question -->
      <p class="text-instruction">
        Please answer the following questions regarding your animal to the best
        of your knowledge.
      </p>

      <div
        v-for="(question, index) in store.state.questionResponse"
        :key="index"
      >
        <div
          v-if="question.type === 'text' && !question.required"
          :style="{ margin: question.margin ? question.margin : '0rem' }"
        >
          <label>{{ question.questionE }}</label>
          <q-input
            outlined
            v-model="question.response"
            type="text"
            autogrow
            clearable
          />
        </div>

        <div
          class="radio-container"
          v-if="question.type === 'radio'"
          :style="{ margin: question.margin ? question.margin : '0rem' }"
        >
          <label class="radio-question">{{ question.questionE }}</label>
          <div class="radio-response">
            <q-radio v-model="question.response" val="yes" label="Yes" />
            <q-radio v-model="question.response" val="no" label="No" />
          </div>
        </div>

        <div
          class="radio-container"
          v-if="question.type === 'radio3'"
          :style="{ margin: question.margin ? question.margin : '0rem' }"
        >
          <label class="radio-question">{{ question.questionE }}</label>
          <div class="radio-response">
            <q-radio
              v-model="question.response"
              :val="question.value1E"
              :label="question.value1E"
            />
            <q-radio
              v-model="question.response"
              :val="question.value2E"
              :label="question.value2E"
            />
            <q-radio
              v-if="question.value3F"
              v-model="question.response"
              :val="question.value3E"
              :label="question.value3E"
            />
          </div>
        </div>

        <div
          v-if="question.type === 'text' && question.required"
          :style="{ margin: question.margin ? question.margin : '0rem' }"
        >
          <label>{{ question.questionE }}</label>
          <q-input
            outlined
            v-model="question.response"
            type="text"
            autogrow
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something ',
            ]"
          />
        </div>
        <div
          v-if="question.type === 'checkBox'"
          :style="{ margin: question.margin ? question.margin : '0rem' }"
        >
          <label>{{ question.questionE }}</label>
          <q-option-group
            v-model="question.response"
            :options="question.optionsE"
            type="checkbox"
          />
        </div>
      </div>

      <div class="btn-submit-container">
        <q-btn label="Submit" type="submit" class="btn-submit" no-caps />
        <h2 class="text-thanks hidden">Merci</h2>
        <h2 class="text-error hidden">
          Une erreur est survenue, veuillez en informer la réception
        </h2>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    // Choisir le store selon les questions/centre sur les pages francaise et anglaise

    // CVRS Général
    // const store = inject("storeCVRSgen");

    // CVRS spécialité
    const storeCVRSSpecialtyChoices = inject("storeCVRSSpecialtyChoices");
    const store = inject(
      `storeCVRS${storeCVRSSpecialtyChoices.getters.storeTemplate()}`
    );

    // CVL général
    // const store = inject("storeCVLVgen");

    // CVLV Exotics
    // const storeExo = inject("storeCVLVExoticsChoices");
    // const store = inject(`storeCVLVExotics${storeExo.getters.storeTemplate()}`);

    // MTRL
    // const store = inject("storeMTRLgen");

    return { store };
  },
};
</script>

<style></style>
