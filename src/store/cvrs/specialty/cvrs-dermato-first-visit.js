"use strict";
import { reactive } from "vue";
// import { ContentEmail } from "../../../class/createContentEmail.js";
import { ContentEmail } from "../../../class/createContentEmailNew.js";

const state = reactive({
  titre: "Médecine interne, 1er RDV",
  informationClient: {
    dossierID: {
      questionF: "Votre numéro de dossier si connu:",
      questionE: "Your file number (of known):",
      titleInEmail: "Numéro de dossier",
      response: "",
    },
    clientName: {
      questionF: "Prénom et nom au dossier: *",
      questionE: "First and last name on file: *",
      titleInEmail: "Nom",
      response: "",
    },
    patientName: {
      questionF: "Nom de votre animal: *",
      questionE: "Animal’s name: *",
      titleInEmail: "Nom du patient",
      response: "",
    },
    phoneNumber: {
      questionF: "Numéro de téléphone au dossier: *",
      questionE: "Phone number on file: *",
      titleInEmail: "Numéro de téléphone",
      response: "",
    },
    clientEmail: {
      questionF: "Votre courriel:",
      questionE: "Your email:",
      titleInEmail: "Courriel",
      response: "",
    },
  },
  questionResponse: {
    1: {
      questionF: "Quelle est l'espèce de votre animal? *",
      questionE: "What is your pet's species? *",
      response: "",
      type: "radio3",
      value1F: "Chien",
      value2F: "Chat",
      value1E: "Dog",
      value2E: "Cat",
      required: true,
      margin: "2rem 0 0rem",
    },
    2: {
      questionF: "Quelle est le sexe de votre animal? *",
      questionE: "What is the sex of your pet? *",
      response: "",
      type: "radio3",
      value1F: "Mâle",
      value2F: "Femelle",
      value1E: "Male",
      value2E: "Female",
      required: true,
      margin: "0",
    },
    3: {
      questionF: "Quelle est la race de votre animal? *",
      questionE: "What breed is your pet? *",
      response: "",
      type: "text",
      required: true,
      margin: "1rem 0 1rem",
    },
    4: {
      questionF: "Où et depuis quand avez-vous adopté votre animal? *",
      questionE: "Where and when did you adopt your pet?",
      response: "",
      type: "text",
      required: true,
      margin: "2rem 0 1rem",
    },
    5: {
      questionF:
        "Quel est le problème primaire pour lequel vous souhaitez consulter en dermatologie? *",
      questionE:
        "What is the primary problem for which you would like to consult a dermatologist? *",
      response: "",
      type: "text",
      required: true,
      margin: "1rem 0 1rem",
    },
    6: {
      questionF: "Quand avez-vous remarqué ce problème pour la première fois?",
      questionE: "When did you notice the problem for the first time?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    7: {
      questionF:
        "Quel est le niveau de démangeaison actuel ? (0 représente une absence de démangeaison, 10 une démangeaison très intense)",
      questionE:
        "What is their current itch level? (0 represents no itching, 10 very intense itching)",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    8: {
      questionF:
        "Où sont dirigées les démangeaisons sur le corps de votre animal ?",
      questionE: "Where does the itching focus on your pet’s body?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    9: {
      questionF: "Avez-vous d’autres animaux à la maison?",
      questionE: "Do you have any other pets at home?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    10: {
      questionF:
        "Est-ce que les autres animaux ou les personnes à la maison ont des problèmes de peau ou des démangeaisons? ",
      questionE:
        "Do other pets or people in the house have skin problems or itching?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    11: {
      questionF: "Voyagez-vous hors du pays avec votre animal?",
      questionE: "Do you travel outside the country with your pet?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    12: {
      questionF:
        "Votre animal a-t-il d’autres conditions médicales connues excluant la peau?",
      questionE:
        "Does your pet have any other known medical conditions that exclude skin?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    13: {
      questionF:
        "Est-ce que votre animal a déjà réagi à un produit ou à un médicament dans le passé?",
      questionE:
        "Has your pet ever reacted to a product or medication in the past?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    14: {
      questionF:
        "Utilisez-vous une prévention tique et puce ? Si oui, laquelle et à quelle fréquence?",
      questionE:
        "Do you use tick and flea prevention? If so, which one and how often?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    15: {
      questionF:
        "Veuillez lister tous les médicaments/shampoings/mousses/nettoyants d’oreille/ lingettes que vous utilisez. Détaillez la dose et la fréquence:",
      questionE:
        "Please list all the medicines/shampoos/foams/ear cleansers/wipes you use. Detail dose and frequency:",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    16: {
      questionF:
        "Êtes-vous capable d’administrer un médicament oralement à votre animal à la maison?",
      questionE:
        "Are you able to administer oral medication to your pet at home?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    17: {
      questionF:
        "Êtes-vous capable d’administrer des traitements dans les oreilles de votre animal à la maison?",
      questionE:
        "Are you able to administer treatments in your pet's ears at home?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    18: {
      questionF: "Êtes-vous capable de donner un bain à votre animal?",
      questionE: "Are you able to give your pet a bath?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    19: {
      questionF:
        "Quelle nourriture/diète votre animal mange-t-il présentement?",
      questionE: "What food/diet is your pet currently eating?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    20: {
      questionF:
        "Quelle autre nourriture/diète votre animal a t’il déjà reçue par le passé à votre connaissance?",
      questionE:
        "To the best of your knowledge, what other food/diet has your pet received in the past?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    21: {
      questionF:
        "Quels sont vos objectifs pour ce rendez-vous ? Quel est le résultat le plus important pour vous, votre animal et votre famille?",
      questionE:
        "What are your goals for this appointment? What is the most important outcome for you, your pet and your family?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
  },
});

const methods = {
  onSubmit() {
    const axios = require("axios").default;
    const btnSubmit = document.querySelector(".btn-submit");
    const textThanks = document.querySelector(".text-thanks");
    const textError = document.querySelector(".text-error");

    const subject = ContentEmail.createContentEmail(state).subject;
    const body = ContentEmail.createContentEmail(state).body;

    // console.log(body);
    // console.log(subject);

    axios
      .post("/_outilsinternes/mail-form.php", {
        body: body,
        subject: subject,
        timeout: 2000,
      })
      .then(function (response) {
        // console.log(response);

        // console.log(response.status);

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
