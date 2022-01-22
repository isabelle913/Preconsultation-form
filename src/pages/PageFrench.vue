<template>
  <q-page class="page">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <!-- information client -->
      <p class="text-instruction">Vos informations:</p>
      <div class="information-container">
        <div class="information-element">
          <label>{{ informationClient.clientName.question }}</label>
          <q-input
            outlined
            v-model="informationClient.clientName.response"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez inscrire votre réponse / Please type something ',
            ]"
          />
        </div>
        <div class="information-element">
          <label>{{ informationClient.patientName.question }}</label>
          <q-input
            outlined
            v-model="informationClient.patientName.response"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez inscrire votre réponse / Please type something ',
            ]"
          />
        </div>
      </div>
      <div class="information-container">
        <div class="information-element">
          <label>{{ informationClient.phoneNumber.question }}</label>
          <q-input
            outlined
            v-model="informationClient.phoneNumber.response"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez inscrire votre réponse / Please type something ',
            ]"
          />
        </div>
        <div class="information-element">
          <label>{{ informationClient.dossierID.question }}</label>
          <q-input
            outlined
            v-model="informationClient.dossierID.response"
            type="text"
            clearable
          />
        </div>
      </div>
      <div class="separator-red"></div>

      <!-- section question -->
      <p class="text-instruction">
        Veuillez remplir les informations suivantes concernant votre animal au
        mieux de vos connaissances:
      </p>

      <div v-for="(question, index) in questionResponse" :key="index">
        <div v-if="question.type === 'text' && !question.required">
          <label>{{ question.question }}</label>
          <q-input
            outlined
            v-model="question.response"
            type="text"
            autogrow
            clearable
          />
        </div>

        <div class="radio-container" v-if="question.type === 'radio'">
          <label class="radio-question">{{ question.question }}</label>
          <div class="radio-response">
            <q-radio v-model="question.response" val="oui" label="Oui" />
            <q-radio v-model="question.response" val="non" label="Non" />
          </div>
        </div>

        <div v-if="question.type === 'text' && question.required">
          <label>{{ question.question }}</label>
          <q-input
            outlined
            v-model="question.response"
            type="text"
            autogrow
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez inscrire votre réponse / Please type something ',
            ]"
          />
        </div>
      </div>

      <div class="btn-submit-container">
        <q-btn label="Submit" type="submit" class="btn-submit" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ContentEmail } from "../class/createContentEmail.js";

export default {
  data() {
    return {
      nameTest: "",
      informationClient: {
        dossierID: {
          question: "Votre numéro de dossier si connu:",
          titleEmail: "Numéro de dossier: ",
          response: "",
        },
        clientName: {
          question: "Votre nom",
          titleEmail: "Nom: ",
          response: "",
        },
        patientName: {
          question: "Nom de votre animal:",
          titleEmail: "Nom du patient: ",
          response: "",
        },
        phoneNumber: {
          question: "Votre numéro de téléphone:",
          titleEmail: "Numéro de téléphone: ",
          response: "",
        },
      },
      questionResponse: {
        1: {
          question: "Quelle est la raison de présentation aujourd’hui : ",
          response: "",
          type: "text",
          required: true,
        },
        2: {
          question:
            "Plus en détails, décrives le ou les problème(s) et depuis combien de temps : ",
          response: "",
          type: "text",
          required: false,
        },
        3: {
          question: "Est-ce que votre animal mange : ",
          response: "",
          type: "radio",
          required: true,
        },
        4: {
          question: "Si non, depuis combien de temps :",
          response: "",
          type: "text",
          required: false,
        },
        5: {
          question: "Est-ce que votre animal présente des vomissements :",
          response: "",
          type: "radio",
          required: true,
        },
        6: {
          question: "Est-ce que votre animal présente de la diarrhée :",
          response: "",
          type: "radio",
          required: true,
        },
        7: {
          question: "Est-ce que votre animal présente des urines anormales:",
          response: "",
          type: "radio",
          required: true,
        },
        8: {
          question: "Est-ce que votre animal présente de la toux :",
          response: "",
          type: "radio",
          required: true,
        },
        9: {
          question:
            "Est-ce que votre animal présente une augmentation de la prise d’eau et des urines : ",
          response: "",
          type: "radio",
          required: true,
        },
        10: {
          question: "Est-ce que votre animal présente une perte de poids :",
          response: "",
          type: "radio",
          required: true,
        },
        11: {
          question: "Antécédents médicaux connus:",
          response: "",
          type: "text",
          required: false,
        },
        12: {
          question:
            "Médicament(s) d’ordonnance et/ou vente libre/supplément(s) pris actuellement (noter le nom, la posologie et l’heure d’administration):",
          response: "",
          type: "text",
          required: false,
        },
        13: {
          question: "Diète quotidienne : ",
          response: "",
          type: "text",
          required: false,
        },
        14: {
          question: "Statut vaccinal : ",
          response: "",
          type: "text",
          required: false,
        },
        15: {
          question: "Prévention antiparasitaire : ",
          response: "",
          type: "text",
          required: false,
        },
        16: {
          question: "Allergies connues :",
          response: "",
          type: "text",
          required: false,
        },
        17: {
          question: "Est-ce que votre animal va à l’extérieur :  ",
          response: "",
          type: "radio",
          required: false,
        },
        18: {
          question:
            "Quel est le caractère de votre animal en milieu vétérinaire  (calme, anxieux, énergique, etc) : ",
          response: "",
          type: "text",
          required: false,
        },
      },
    };
  },
  methods: {
    onSubmit() {
      const tempo = ContentEmail.createContentEmail(
        this.informationClient,
        this.questionResponse
      );
      console.log(tempo.body);
      console.log(tempo.subject);
    },
  },
};
</script>

<style></style>
