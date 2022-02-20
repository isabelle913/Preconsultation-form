<template>
  <q-page class="page">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <!-- information client -->
      <p class="text-instruction">Your Information</p>
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
              (val) => (val && val.length > 0) || 'Please type something ',
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
              (val) => (val && val.length > 0) || 'Please type something ',
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
            type="tel"
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something ',
            ]"
          />
        </div>
        <div class="information-element">
          <label>{{ informationClient.dossierID.question }}</label>
          <q-input
            outlined
            v-model="informationClient.dossierID.response"
            type="number"
            clearable
          />
        </div>
        <div class="information-element">
          <label>{{ informationClient.clientEmail.question }}</label>
          <q-input
            outlined
            v-model="informationClient.clientEmail.response"
            type="email"
            clearable
          />
        </div>
      </div>
      <div class="separator-red"></div>

      <!-- section question -->
      <p class="text-instruction">
        Please answer the following questions regarding your animal to the best
        of your knowledge.
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
            <q-radio v-model="question.response" val="yes" label="Yes" />
            <q-radio v-model="question.response" val="no" label="No" />
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
              (val) => (val && val.length > 0) || 'Please type something ',
            ]"
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
import { ContentEmail } from "../class/createContentEmail.js";

export default {
  data() {
    return {
      informationClient: {
        dossierID: {
          question: "Your file number (of known):",
          titleEmail: "Client ID: ",
          response: "",
        },
        clientName: {
          question: "Name on file: *",
          titleEmail: "Name: ",
          response: "",
        },
        patientName: {
          question: "Name of your pet: *",
          titleEmail: "Pet name: ",
          response: "",
        },
        phoneNumber: {
          question: "Phone number on file: *",
          titleEmail: "Phone number: ",
          response: "",
        },
        clientEmail: {
          question: "Your email:",
          titleEmail: "Client email: ",
          response: "",
        },
      },
      questionResponse: {
        1: {
          question: "What is the reason for your consultation today?",
          response: "",
          type: "text",
          required: true,
        },
        2: {
          question:
            "Can you describe the problem(s) in depth and when it started?",
          response: "",
          type: "text",
          required: false,
        },
        3: {
          question: "Is your pet eating as usual?",
          response: "",
          type: "radio",
          required: true,
        },
        4: {
          question: "If not, since when?",
          response: "",
          type: "text",
          required: false,
        },
        5: {
          question: "Is your pet vomiting?",
          response: "",
          type: "radio",
          required: true,
        },
        6: {
          question: "Please specify:",
          response: "",
          type: "text",
          required: false,
        },
        7: {
          question: "Does your pet have diarrhea?",
          response: "",
          type: "radio",
          required: true,
        },
        8: {
          question: "Please specify:",
          response: "",
          type: "text",
          required: false,
        },
        9: {
          question: "Is your pet’s urine abnormal?",
          response: "",
          type: "radio",
          required: true,
        },
        10: {
          question: "Please specify:",
          response: "",
          type: "text",
          required: false,
        },
        11: {
          question: "Is your pet coughing?",
          response: "",
          type: "radio",
          required: true,
        },
        12: {
          question: "Please specify:",
          response: "",
          type: "text",
          required: false,
        },
        13: {
          question: "Is your animal drinking and urinating more than usual?",
          response: "",
          type: "radio",
          required: true,
        },
        14: {
          question: "Please specify:",
          response: "",
          type: "text",
          required: false,
        },
        15: {
          question: "Did your pet lose weight?",
          response: "",
          type: "radio",
          required: true,
        },
        16: {
          question: "Please specify:",
          response: "",
          type: "text",
          required: false,
        },
        17: {
          question: "Known medical history:",
          response: "",
          type: "text",
          required: false,
        },
        18: {
          question:
            "Medication (prescribed or OTC) or supplements currently being taken. Please specify name, dosage, and administration hours:",
          response: "",
          type: "text",
          required: false,
        },
        19: {
          question: "Daily diet:",
          response: "",
          type: "text",
          required: false,
        },
        20: {
          question: "Vaccination status:",
          response: "",
          type: "text",
          required: false,
        },
        21: {
          question: "Parasite prevention:",
          response: "",
          type: "text",
          required: false,
        },
        22: {
          question: "Known allergies?",
          response: "",
          type: "text",
          required: false,
        },
        23: {
          question: "Does your pet go outside?",
          response: "",
          type: "radio",
          required: false,
        },
        24: {
          question: "Please specify:",
          response: "",
          type: "text",
          required: false,
        },
        25: {
          question:
            "What is your pet’s behaviour in a veterinary environment? (calm, anxious, energetic, etc.):",
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
      console.log(body);
      // console.log(subject);
      axios
        .post("/_outilsinternes/forms/preconsultation-general/mail.php", {
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
  mounted() {
    console.log(`Bonjour Ian et Mathieu :)`);
  },
};
</script>

<style></style>
