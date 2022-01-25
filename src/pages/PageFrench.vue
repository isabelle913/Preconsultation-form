<template>
  <q-page class="page">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <!-- information client -->
      <p class="text-instruction">Vos informations</p>
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
        Merci de remplir les informations au mieux de vos connaissances
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
        <q-btn label="Soumettre" type="submit" class="btn-submit" />
        <h2 class="text-thanks hidden">Merci</h2>
        <h2 class="text-error hidden">
          Une erreur est survenue, veuillez en informer la réception
        </h2>
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
          question: "Votre numéro de dossier si connu :",
          titleEmail: "Numéro de dossier : ",
          response: "",
        },
        clientName: {
          question: "Nom au dossier :",
          titleEmail: "Nom : ",
          response: "",
        },
        patientName: {
          question: "Nom de votre animal :",
          titleEmail: "Nom du patient : ",
          response: "",
        },
        phoneNumber: {
          question: "Numéro de téléphone au dossier :",
          titleEmail: "Numéro de téléphone : ",
          response: "",
        },
      },
      questionResponse: {
        1: {
          question:
            "Quelle est la raison de votre visite ? ou Quelle est la raison de présentation aujourd’hui/ce qui vous inquiète principalement aujourd'hui' ",
          response: "",
          type: "text",
          required: true,
        },
        2: {
          question:
            "Décrivez-le ou les problème(s) en détail et depuis combien de temps cela dure.",
          response: "",
          type: "text",
          required: false,
        },
        3: {
          question: "Est-ce que votre animal mange ?",
          response: "",
          type: "radio",
          required: true,
        },
        4: {
          question: "Si non, depuis combien de temps ?",
          response: "",
          type: "text",
          required: false,
        },
        5: {
          question: "Est-ce que votre animal présente des vomissements ?",
          response: "",
          type: "radio",
          required: true,
        },
        6: {
          question: "Au besoin, précisez :",
          response: "",
          type: "text",
          required: false,
        },
        7: {
          question: "Est-ce que votre animal présente de la diarrhée ?",
          response: "",
          type: "radio",
          required: true,
        },
        8: {
          question: "Au besoin, précisez :",
          response: "",
          type: "text",
          required: false,
        },
        9: {
          question: "Est-ce que votre animal présente des urines anormales ?",
          response: "",
          type: "radio",
          required: true,
        },
        10: {
          question: "Au besoin, précisez :",
          response: "",
          type: "text",
          required: false,
        },
        11: {
          question: "Est-ce que votre animal présente de la toux ?",
          response: "",
          type: "radio",
          required: true,
        },
        12: {
          question: "Au besoin, précisez :",
          response: "",
          type: "text",
          required: false,
        },
        13: {
          question:
            "Est-ce que votre animal présente une augmentation de la prise d’eau et des urines ?",
          response: "",
          type: "radio",
          required: true,
        },
        14: {
          question: "Au besoin, précisez :",
          response: "",
          type: "text",
          required: false,
        },
        15: {
          question: "Est-ce que votre animal présente une perte de poids ?",
          response: "",
          type: "radio",
          required: true,
        },
        16: {
          question: "Au besoin, précisez :",
          response: "",
          type: "text",
          required: false,
        },
        17: {
          question: "Antécédents médicaux connus :",
          response: "",
          type: "text",
          required: false,
        },
        18: {
          question:
            "Médicament(s) d’ordonnance et/ou vente libre/supplément(s) pris actuellement. Merci d’indiquer le nom, la posologie et l’heure d’administration :",
          response: "",
          type: "text",
          required: false,
        },
        19: {
          question: "Sa diète quotidienne :",
          response: "",
          type: "text",
          required: false,
        },
        20: {
          question: "Son statut vaccinal :",
          response: "",
          type: "text",
          required: false,
        },
        21: {
          question: "Prévention antiparasitaire :",
          response: "",
          type: "text",
          required: false,
        },
        22: {
          question: "Des allergies connues ?",
          response: "",
          type: "text",
          required: false,
        },
        23: {
          question: "Est-ce que votre animal va à l’extérieur ?",
          response: "",
          type: "radio",
          required: false,
        },
        24: {
          question: "Au besoin, précisez :",
          response: "",
          type: "text",
          required: false,
        },
        25: {
          question:
            "Décrivez le comportement de votre animal en milieu vétérinaire (calme, anxieux, énergique, etc) :",
          response: "",
          type: "text",
          required: false,
        },
      },
    };
  },
  methods: {
    onSubmit() {
      const axios = require("axios").default;
      const btnSubmit = document.querySelector(".btn-submit");
      const textThanks = document.querySelector(".text-thanks");
      const textError = document.querySelector(".text-error");

      const subject = ContentEmail.createContentEmail(
        this.informationClient,
        this.questionResponse
      ).subject;
      const body = ContentEmail.createContentEmail(
        this.informationClient,
        this.questionResponse
      ).body;
      // console.log(body);
      // console.log(subject);
      axios
        .post("/_outilsinternes/mail.php", {
          body: body,
          subject: subject,
          timeout: 2000,
        })
        .then(function (response) {
          console.log(response);

          console.log(response.status);

          if (response.status === 200) {
            textThanks.classList.remove("hidden");
            btnSubmit.classList.add("hidden");
          } else {
            textError.classList.remove("hidden");
            btnSubmit.classList.add("hidden");
          }
        })
        .catch(function (error) {
          console.log(error);
          textError.classList.remove("hidden");
          btnSubmit.classList.add("hidden");
        });
    },
  },
};
</script>

<style></style>
