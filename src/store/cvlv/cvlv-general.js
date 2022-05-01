"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../../class/createContentEmail.js";

const state = reactive({
  titre: "Formulaire générale CVL",
  informationClient: {
    dossierID: {
      questionF: "Votre numéro de dossier si connu:",
      questionE: "Your file number (of known):",
      titleEmail: "Numéro de dossier : ",
      response: "",
    },
    clientName: {
      questionF: "Nom au dossier: *",
      questionE: "Name on file: *",
      titleEmail: "Nom : ",
      response: "",
    },
    patientName: {
      questionF: "Nom de votre animal: *",
      questionE: "Name of your pet: *",
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
      questionF: "Quelle est la raison de votre visite? *",
      questionE: "What is the reason for your consultation today? *",
      response: "",
      type: "text",
      required: true,
      margin: "0",
    },
    2: {
      questionF:
        "Décrivez-le ou les problème(s) en détail et depuis combien de temps cela dure.",
      questionE:
        "Can you describe the problem(s) in depth and when it started:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    3: {
      questionF: "Est-ce que votre animal mange normalement?",
      questionE: "Is your pet eating as usual?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    4: {
      questionF: "Si non, depuis combien de temps?",
      questionE: "If not, since when?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    5: {
      questionF: "Est-ce que votre animal présente des vomissements?",
      questionE: "Is your pet vomiting?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    6: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    7: {
      questionF: "Est-ce que votre animal présente de la diarrhée?",
      questionE: "Does your pet have diarrhea?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    8: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    9: {
      questionF: "Est-ce que votre animal présente des urines anormales?",
      questionE: "Is your pet’s urine abnormal?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    10: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },

    11: {
      questionF: "Est-ce que votre animal présente de la toux?",
      questionE: "Is your pet coughing? ",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    12: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    13: {
      questionF:
        "Est-ce que votre animal boit plus d’eau et urine plus qu’à l’habitude?",
      questionE: "Is your animal drinking and urinating more than usual?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    14: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    15: {
      questionF: "Est-ce que votre animal présente une perte de poids?",
      questionE: "Did your pet lose weight?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    16: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    17: {
      questionF: "Antécédents médicaux connus:",
      questionE: "Known medical history: ",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    18: {
      questionF:
        "Médicament(s) d’ordonnance et/ou vente libre/supplément(s) pris actuellement. Merci d’indiquer le nom, la posologie et l’heure d’administration:",
      questionE:
        "Medication (prescribed or OTC) or supplements currently being taken. Please specify name, dosage, and administration hours:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    19: {
      questionF:
        "Est-ce que votre animal est suivi par un oncologue et/ou prend/reçoit des traitements de chimiothérapie?",
      questionE:
        "Is your pet being followed  by an oncologist and/or is taking/receiving chemotherapy treatments?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    20: {
      questionF:
        "Est-ce que votre animal prend des médicaments chimiothérapeutique?",
      questionE: "Is your animal taking chemotherapeutic medication?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    21: {
      questionF: "Si oui, nom, la posologie et l’heure d’administration:",
      questionE:
        "If so, please indicate the name, dosage, and administration hours:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    22: {
      questionF: "Sa diète quotidienne:",
      questionE: "Daily diet: ",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    23: {
      questionF: "Son statut vaccinal, au besoin précisez:",
      questionE: "Vaccination status:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    24: {
      questionF: "Prévention antiparasitaire, au besoin précisez:",
      questionE: "Parasite prevention:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    25: {
      questionF: "Des allergies connues:",
      questionE: "Known allergies:",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    26: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    27: {
      questionF: "Est-ce que votre animal va à l’extérieur?",
      questionE: "Does your pet go outside?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    28: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    29: {
      questionF:
        "Décrivez le comportement de votre animal en milieu vétérinaire (calme, anxieux, énergique, etc.):",
      questionE:
        "What is your pet’s behaviour in a veterinary environment? (calm, anxious, energetic, etc.):",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
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

    console.log(body);
    console.log(subject);

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
};

export default { state, methods };
