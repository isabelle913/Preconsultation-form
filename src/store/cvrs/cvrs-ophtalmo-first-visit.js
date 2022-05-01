"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../../class/createContentEmail.js";

const state = reactive({
  titre: "Ophtalmologie, 1er RDV",
  informationClient: {
    dossierID: {
      questionF: "Votre numéro de dossier si connu:",
      questionE: "Your file number (of known):",
      titleEmail: "Numéro de dossier : ",
      response: "",
    },
    clientName: {
      questionF: "Prénom et nom au dossier: *",
      questionE: "First and last name on file: *",
      titleEmail: "Nom : ",
      response: "",
    },
    patientName: {
      questionF: "Nom de votre animal: *",
      questionE: "Animal’s name: *",
      titleEmail: "Nom du patient: ",
      response: "",
    },
    phoneNumber: {
      questionF: "Numéro de téléphone au dossier: *",
      questionE: "Phone number on file: *",
      titleEmail: "Numéro de téléphone: ",
      response: "",
    },
    clientEmail: {
      questionF: "Votre courriel:",
      questionE: "Your email:",
      titleEmail: "Courriel: ",
      response: "",
    },
  },
  questionResponse: {
    1: {
      questionF:
        "Pourquoi croyez-vous que votre animal a un problème oculaire?",
      questionE: "Why do you think your pet has an eye problem?",
      response: [],
      type: "checkBox",

      optionsF: [
        { label: "Perte de vision", value: "Perte de vision" },
        { label: "Écoulement oculaire", value: "Écoulement oculaire" },
        { label: "Apparence anormale", value: "Apparence anormale" },
        { label: "Douleur oculaire", value: "Douleur oculaire" },
        {
          label: "Noté par vétérinaire référent",
          value: "Noté par vétérinaire référent",
        },
      ],
      optionsE: [
        { label: "Vision loss", value: "Vision loss" },
        { label: "Eye discharge", value: "Eye discharge" },
        { label: "Abnormal appearance", value: "Abnormal appearance" },
        { label: "Eye pain", value: "Eye pain" },
        {
          label: "Noted by referring veterinarian",
          value: "Noted by referring veterinarian",
        },
      ],
      required: false,
      margin: "0rem 0 0rem",
    },
    2: {
      questionF: "Autres(s):",
      questionE: "Other:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    3: {
      questionF: "Depuis quand le problème est-il présent?",
      questionE: "How long has the problem been present for?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    4: {
      questionF: "Quel oeil est affecté?",
      questionE: "Which eye is affected?",
      response: "",
      type: "radio3",
      value1F: "Droit",
      value2F: "Gauche",
      value3F: "Les deux",
      value1E: "Right",
      value2E: "Left",
      value3E: "Both",
      required: false,
      margin: "2rem 0 1rem",
    },
    5: {
      questionF:
        "L’apparence de l’œil a-t-elle changé depuis le début des symptômes?",
      questionE: "Has the eye appearance changed since the first symptoms?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sait pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Don't know",
      required: false,
      margin: "2rem 0 0rem",
    },
    6: {
      questionF: "Comment/Pourquoi?",
      questionE: "How/Why?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    7: {
      questionF: "Est-ce qu’il y a eu des traitements?",
      questionE: "Has there been any treatments? 	",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },

    8: {
      questionF: "Veuillez préciser:",
      questionE: "If so, please specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    9: {
      questionF: "Comment estimez-vous la vision de votre animal?",
      questionE: "How would you assess your pet’s vision?",
      response: [],
      type: "checkBox",

      optionsF: [
        { label: "Excellente", value: "Excellente" },
        { label: "Mauvaise en tout temps", value: "Mauvaise en tout temps" },
        {
          label: "Mauvaise en lumière tamisée",
          value: "Mauvaise en lumière tamisée",
        },
        {
          label: "Mauvaise en lumière intense",
          value: "Mauvaise en lumière intense",
        },
        {
          label: "Mauvaise pour les objets de près",
          value: "Mauvaise pour les objets de près",
        },
        {
          label: "Mauvaise pour les objets éloignés",
          value: "Mauvaise pour les objets éloignés",
        },
        {
          label: "Mauvaise pour les objets en mouvement",
          value: "Mauvaise pour les objets en mouvement",
        },
        {
          label: "Mauvaise pour les objets fixes",
          value: "Mauvaise pour les objets fixes",
        },
        {
          label: "Mauvaise lorsqu’il tourne à gauche",
          value: "Mauvaise lorsqu’il tourne à gauche",
        },
        {
          label: "Mauvaise lorsqu’il tourne à gauche",
          value: "Mauvaise lorsqu’il tourne à gauche",
        },
        {
          label: "Mauvaise lorsqu’il descend",
          value: "Mauvaise lorsqu’il descend",
        },
        {
          label: "Mauvaise lorsqu’il monte",
          value: "Mauvaise lorsqu’il monte",
        },
      ],
      optionsE: [
        { label: "Excellent", value: "Excellent" },
        { label: "Bad all the time", value: "Bad all the time" },
        { label: "Bad under low lighting", value: "Bad under low lighting" },
        {
          label: "Bad under bright lighting",
          value: "Bad under bright lighting",
        },
        {
          label: "Bad for objects that are close",
          value: "Bad for objects that are close",
        },
        {
          label: "Bad for objects that are close",
          value: "Bad for objects that are close",
        },
        { label: "Bad with moving objects", value: "Bad with moving objects" },
        { label: "Bad with fixed objects", value: "Bad with fixed objects" },
        { label: "Bad when turning left", value: "Bad when turning left" },
        { label: "Bad when turning right", value: "Bad when turning right" },
        {
          label: "Bad when he’s coming down",
          value: "Bad when he’s coming down",
        },
        {
          label: "Bad when’s he’s going up",
          value: "Bad when’s he’s going up",
        },
      ],
      required: false,
      margin: "2rem 0 1rem",
    },
    10: {
      questionF:
        "Croyez-vous que votre animal voit bien dans un environnement FAMILIER?",
      questionE:
        "Do you think your animal sees well in a FAMILIAR environment?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sait pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Don't know",
      required: false,
      margin: "2rem 0 1rem",
    },
    11: {
      questionF:
        "Croyez-vous que votre animal voit bien dans un environnement INCONNU?",
      questionE:
        "Do you think your animal sees well in a UNFAMILIAR environment?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sait pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Don't know",
      required: false,
      margin: "2rem 0 1rem",
    },
    12: {
      questionF: "A-t-il déjà eu un autre problème oculaire?",
      questionE: "Has your pet ever had other eye problems?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sait pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Don't know",
      required: false,
      margin: "2rem 0 0rem",
    },
    13: {
      questionF: "Le cas échéant, lequel?",
      questionE: "If so, which one(s)?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    14: {
      questionF:
        "Votre animal a-t-il souffert de crises, de perte d’équilibre, de faiblesse, d’incoordination et de changements de personnalité depuis l’apparition des symptômes?",
      questionE:
        "Votre animal a-t-il souffert de crises, de perte d’équilibre, de faiblesse, d’incoordination et de changements de personnalité depuis l’apparition des symptômes?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sait pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Don't know",
      required: false,
      margin: "2rem 0 1rem",
    },
    15: {
      questionF: "Est-ce que votre animal prend actuellement des médicaments?",
      questionE: "Is your animal currently taking any medication?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    16: {
      questionF: "Le cas échéant, lesquels?",
      questionE: "If so, please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    17: {
      questionF: "Avez-vous d’autres animaux à la maison?",
      questionE: "Do you have other pets at home?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    18: {
      questionF: "Le cas échéant, lesquels?",
      questionE: "If so, which ones?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 0rem",
    },
    19: {
      questionF: "Ont-ils des problèmes oculaires?",
      questionE: "Do they have eye problems?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sait pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Don't know",
      required: false,
      margin: "0rem 0 1rem",
    },
    20: {
      questionF:
        "Est-ce que votre animal a été exposé à des produits ou substances chimiques récemment?",
      questionE:
        "Has your animal been exposed to any chemical products or substances recently?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sait pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Don't know",
      required: false,
      margin: "2rem 0 1rem",
    },
    21: {
      questionF: "Antécédents médicaux connus:",
      questionE: "Known medical history:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    22: {
      questionF: "Est-ce que votre animal mange normalement?",
      questionE: "Is your pet eating as usual?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    23: {
      questionF: "Si non, depuis combien de temps?",
      questionE: "If not, since when?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    24: {
      questionF:
        "Votre animal présente-t-il des selles molles ou de la diarrhée?",
      questionE: "Does your animal have soft stool or diarrhea?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    25: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, please specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    26: {
      questionF:
        "Votre animal présente-t-il des selles noires, du sang dans les selles, ou toute autre anomalie des selles?",
      questionE:
        "Does your animal have dark (black) stool, blood in the stool, or any other stool abnormality?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    27: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, please specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    28: {
      questionF:
        "Est-ce que votre animal boit plus d’eau et urine plus qu’à l’habitude?",
      questionE: "Is your animal drinking and urinating more than usual?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    29: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, please specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
  },
});

const methods = {
  test() {
    console.log(state);
  },
  onSubmit() {
    const axios = require("axios").default;
    const btnSubmit = document.querySelector(".btn-submit");
    const textThanks = document.querySelector(".text-thanks");
    const textError = document.querySelector(".text-error");

    const subject = ContentEmail.createContentEmail(state).subject;
    const body = ContentEmail.createContentEmail(state).body;

    console.log(body);
    console.log(subject);

    axios
      .post("/_outilsinternes/mail-form.php", {
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
};

export default { state, methods };
