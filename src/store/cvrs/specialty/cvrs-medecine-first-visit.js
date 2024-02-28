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
      questionF:
        "Quelle est la raison principale de votre visite en médecine interne? *",
      questionE:
        "What is the main reason for your consultation in internal medicine? *",
      response: "",
      type: "text",
      required: true,
      margin: "0",
    },
    2: {
      questionF: "Quand avez-vous noté le problème pour la première fois?",
      questionE: "When did you notice the problem for the first time?",
      response: "",
      type: "text",
      required: false,
      margin: "1rem 0 1rem",
    },
    3: {
      questionF: "Le problème s’est-il développé subitement ou graduellement?",
      questionE: "Did this problem start suddenly or gradually?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    4: {
      questionF: "Comment est le niveau d’énergie de votre animal?",
      questionE: "How is your animal’s energy level?",
      response: "",
      type: "radio3",
      value1F: "Stable",
      value2F: "Augmenté",
      value3F: "Diminué",
      value1E: "Stable",
      value2E: "Increased",
      value3E: "Decreased",
      required: false,
      margin: "2rem 0 0rem",
    },
    5: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    6: {
      questionF: "Avez-vous l’impression que votre animal est en douleur?",
      questionE: "Do you think that your animal is in pain?",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Peut-être",
      value1E: "Yes",
      value2E: "No",
      value3E: "Maybe",
      required: true,
      margin: "2rem 0 0rem",
    },
    7: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    8: {
      questionF:
        "Votre animal a-t-il d’autres problèmes de santé ou antécédents médicaux?",
      questionE:
        "Does your animal have any other health problems or previous medical history?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    9: {
      questionF:
        "Votre animal démontre-t-il de la toux, des éternuements ou des écoulements nasaux?",
      questionE:
        "Does your animal have any coughing, sneezing or nasal discharge?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    10: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    11: {
      questionF:
        "Votre animal présente-t-il des selles molles ou de la diarrhée?",
      questionE: "Does your animal have soft stool or diarrhea?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    12: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    13: {
      questionF:
        "Votre animal présente-t-il des selles noires, du sang dans les selles ou toute autre anomalie des selles?",
      questionE:
        "Does your animal have dark (black) stool, blood in the stool, or any other abnormality?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    14: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    15: {
      questionF:
        "Votre animal présente-t-il des vomissements ou régurgitations?",
      questionE: "Does your animal have any vomiting or regurgitation?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    16: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    17: {
      questionF: "Comment est la consommation d’eau de votre animal?",
      questionE: "How is your animal’s water consumption?",
      response: "",
      type: "radio3",
      value1F: "Stable",
      value2F: "Augmenté",
      value3F: "Diminué",
      value1E: "Stable",
      value2E: "Increased",
      value3E: "Decreased",
      required: true,
      margin: "2rem 0 0rem",
    },
    18: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    19: {
      questionF:
        "Comment sont les mictions de votre animal (fréquence d’urination)?",
      questionE: "How is your animal’s urination frequency?",
      response: "",
      type: "radio3",
      value1F: "Stable",
      value2F: "Augmenté",
      value3F: "Diminué",
      value1E: "Stable",
      value2E: "Increased",
      value3E: "Decreased",
      required: true,
      margin: "2rem 0 0rem",
    },
    20: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    21: {
      questionF: "Comment est l’appétit de votre animal?",
      questionE: "How is your animal’s appetite?",
      response: "",
      type: "radio3",
      value1F: "Stable",
      value2F: "Augmenté",
      value3F: "Diminué",
      value1E: "Stable",
      value2E: "Increased",
      value3E: "Decreased",
      required: true,
      margin: "2rem 0 0rem",
    },
    22: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    23: {
      questionF:
        "Quelle est la diète quotidienne de votre animal? (Veuillez aussi inclure gâteries et nourriture de table)",
      questionE:
        "What is your animal’s daily diet (please also include treats and table food)? ",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    24: {
      questionF:
        "Si votre rendez-vous est aujourd'hui, quand votre animal a-t-il pris son dernier repas?",
      questionE: "If your appointment is today, when did your animal last eat?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    25: {
      questionF: "Comment est le poids de votre animal?",
      questionE: "How is your animal’s weight?",
      response: "",
      type: "radio3",
      value1F: "Stable",
      value2F: "Augmenté",
      value3F: "Diminué",
      value1E: "Stable",
      value2E: "Increased",
      value3E: "Decreased",
      required: true,
      margin: "2rem 0 0rem",
    },
    26: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    27: {
      questionF: "À quel âge avez-vous adoptez votre animal?",
      questionE: "At what age did you adopt your pet?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    28: {
      questionF: "Quand votre animal a-t-il reçu sa dernière vaccination?",
      questionE: "When did your animal receive their last vaccination?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    29: {
      questionF: "Votre animal reçoit-il des vermifuges?",
      questionE: "Does your animal receive a dewormer?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    30: {
      questionF: "Si oui, précisez lesquels :",
      questionE: "If yes, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    31: {
      questionF:
        "Si votre animal est un chat, connaissez-vous son statut FIV/FeLV?",
      questionE: "If your pet is a cat, do you know its FIV/FeLV status?",
      response: "",
      type: "radio3",
      value1F: "Positif",
      value2F: "Négatif",
      value3F: "Ne sais pas ou ne s'applique pas",
      value1E: "Positive",
      value2E: "Negative",
      value3E: "Don't know or not applicable",
      required: true,
      margin: "2rem 0 0rem",
    },
    32: {
      questionF:
        "Votre animal reçoit-il un traitement préventif contre les tiques et vers du cœur?",
      questionE:
        "Does your animal receive preventative treatment against heartworm and ticks?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    33: {
      questionF: "Si oui, précisez quel produit :",
      questionE: "If yes, specify which product:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    34: {
      questionF: "Avez-vous déjà vu des tiques sur votre animal?",
      questionE: "Have you ever seen any ticks on your animal?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 1rem",
    },
    35: {
      questionF: "Si oui, précisez:",
      questionE: "If yes, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    36: {
      questionF: "Votre animal a-t-il voyagé à l’extérieur du Québec?",
      questionE: "Has your animal ever travelled outside of Quebec?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    37: {
      questionF: "Si oui, précisez le ou les endroit(s) :",
      questionE: "If yes, specify where:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    38: {
      questionF: "Votre animal a-t-il accès à l’extérieur?",
      questionE: "Does your animal go outside?",
      response: "",
      type: "radio",
      required: false,
      margin: "1rem 0 1rem",
    },
    39: {
      questionF: "Avez-vous d’autres animaux à la maison?",
      questionE: "Do you have other animals at home?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    40: {
      questionF: "Votre animal prend-il présentement des médicaments ?",
      questionE: "Is your animal currently taking any medication?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    41: {
      questionF:
        "Si oui, indiquer la posologie (nom, dosage, fréquence d’administration) :",
      questionE:
        "If the answer is yes, please specify name, dosage and frequency:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    42: {
      questionF:
        "Avez-vous de la difficulté à administrer les médicaments à votre animal?",
      questionE:
        "Do you have any difficulty administering medication to your animal?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    43: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    44: {
      questionF: "Avez-vous besoin de renouvellements de médicaments?",
      questionE: "Do you need medication renewals?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    45: {
      questionF: "Si oui, pour lesquels?",
      questionE: "If so, for which ones? ",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    46: {
      questionF:
        "Si d’autres traitements ont été essayés pour le problème de santé de votre animal, avez-vous l’impression qu’ils ont aidé?",
      questionE:
        "If other treatments have been tried for your animal, do you feel that any of them helped?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    47: {
      questionF: "Si oui, lesquels :",
      questionE: "If yes, which ones:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
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
