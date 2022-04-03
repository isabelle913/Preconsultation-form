<template>
  <q-page class="page">
    <q-form @submit.prevent="store.methods.onSubmit">
      <!-- information client -->
      <p class="text-instruction">Vos informations</p>
      <div class="information-container">
        <div class="information-element">
          <label>{{
            store.state.informationClient.clientName.questionF
          }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.clientName.response"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Veuillez inscrire votre réponse',
            ]"
          />
        </div>
        <div class="information-element">
          <label>{{
            store.state.informationClient.patientName.questionF
          }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.patientName.response"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Veuillez inscrire votre réponse',
            ]"
          />
        </div>
      </div>
      <div class="information-container">
        <div class="information-element">
          <label>{{
            store.state.informationClient.phoneNumber.questionF
          }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.phoneNumber.response"
            type="tel"
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Veuillez inscrire votre réponse',
            ]"
          />
        </div>
        <div class="information-element">
          <label>{{ store.state.informationClient.dossierID.questionF }}</label>
          <q-input
            outlined
            v-model="store.state.informationClient.dossierID.response"
            type="number"
            clearable
          />
        </div>
        <div class="information-element">
          <label>{{
            store.state.informationClient.clientEmail.questionF
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
        Merci de répondre aux questions ci-dessous au mieux de vos
        connaissances.
      </p>

      <div
        v-for="(question, index) in store.state.questionResponse"
        :key="index"
      >
        <div v-if="question.type === 'text' && !question.required">
          <div :style="{ margin: question.margin ? question.margin : '0rem' }">
            <label>{{ question.questionF }}</label>
            <q-input
              outlined
              v-model="question.response"
              type="text"
              autogrow
              clearable
            />
          </div>
        </div>

        <div
          class="radio-container"
          v-if="question.type === 'radio'"
          :style="{ margin: question.margin ? question.margin : '0rem' }"
        >
          <label class="radio-question">{{ question.questionF }}</label>
          <div class="radio-response">
            <q-radio v-model="question.response" val="oui" label="Oui" />
            <q-radio v-model="question.response" val="non" label="Non" />
          </div>
        </div>

        <div
          class="radio-container"
          v-if="question.type === 'radio3'"
          :style="{ margin: question.margin ? question.margin : '0rem' }"
        >
          <label class="radio-question">{{ question.questionF }}</label>
          <div class="radio-response">
            <q-radio
              v-model="question.response"
              :val="question.value1F"
              :label="question.value1F"
            />
            <q-radio
              v-model="question.response"
              :val="question.value2F"
              :label="question.value2F"
            />
            <q-radio
              v-model="question.response"
              :val="question.value3F"
              :label="question.value3F"
            />
          </div>
        </div>

        <div v-if="question.type === 'text' && question.required">
          <div :style="{ margin: question.margin ? question.margin : '0rem' }">
            <label>{{ question.questionF }}</label>
            <q-input
              outlined
              v-model="question.response"
              type="text"
              autogrow
              clearable
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Veuillez inscrire votre réponse',
              ]"
            />
          </div>
        </div>
      </div>

      <div class="btn-submit-container">
        <q-btn label="Soumettre" type="submit" class="btn-submit" no-caps />
        <h2 class="text-thanks hidden">Merci</h2>
        <h2 class="text-error hidden">
          Une erreur est survenue, veuillez en informer la réception
        </h2>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { onMounted, inject } from "vue";

export default {
  setup() {
    // Choisir le store selon les questions/centre sur les pages francaise et anglaise
    // const store = inject("storeCVLVgen");
    // const store = inject("storeCVRSgen");
    // const store = inject("storeCVRSMiFirstVisit");
    // const store = inject("storeCVRSMiFollowUp");
    const store = inject("storeMTRLgen");

    onMounted(function () {
      console.log(`Bonjour Ian et Mathieu :)`);
    });
    return { store };
  },
};
</script>

<style></style>
