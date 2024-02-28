"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../../class/createContentEmail.js";

const state = reactive({
  titre: "Formulaire générale CVRS",
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
    },
    2: {
      questionF:
        "Décrivez-le ou les problème(s) en détail et depuis combien de temps cela dure.",
      questionE:
        "Can you describe the problem(s) in depth and when it started:",
      response: "",
      type: "text",
      required: false,
    },
    3: {
      questionF: "Est-ce que votre animal mange normalement?",
      questionE: "Is your pet eating as usual?",
      response: "",
      type: "radio",
      required: true,
    },
    4: {
      questionF: "Si non, depuis combien de temps?",
      questionE: "If not, since when?",
      response: "",
      type: "text",
      required: false,
    },
    5: {
      questionF: "Est-ce que votre animal présente des vomissements?",
      questionE: "Is your pet vomiting?",
      response: "",
      type: "radio",
      required: true,
    },
    6: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    7: {
      questionF: "Est-ce que votre animal présente de la diarrhée?",
      questionE: "Does your pet have diarrhea?",
      response: "",
      type: "radio",
      required: true,
    },
    8: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    9: {
      questionF: "Est-ce que votre animal présente des urines anormales?",
      questionE: "Is your pet’s urine abnormal?",
      response: "",
      type: "radio",
      required: true,
    },
    10: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    11: {
      questionF: "Est-ce que votre animal présente de la toux?",
      questionE: "Is your pet coughing? ",
      response: "",
      type: "radio",
      required: true,
    },
    12: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    13: {
      questionF:
        "Est-ce que votre animal boit plus d’eau et urine plus qu’à l’habitude?",
      questionE: "Is your animal drinking and urinating more than usual?",
      response: "",
      type: "radio",
      required: true,
    },
    14: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    15: {
      questionF: "Est-ce que votre animal présente une perte de poids?",
      questionE: "Did your pet lose weight?",
      response: "",
      type: "radio",
      required: true,
    },
    16: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    17: {
      questionF: "Antécédents médicaux connus:",
      questionE: "Known medical history: ",
      response: "",
      type: "text",
      required: false,
    },
    18: {
      questionF:
        "Médicament(s) d’ordonnance et/ou vente libre/supplément(s) pris actuellement. Merci d’indiquer le nom, la posologie et l’heure d’administration:",
      questionE:
        "Medication (prescribed or OTC) or supplements currently being taken. Please specify name, dosage, and administration hours:",
      response: "",
      type: "text",
      required: false,
    },
    19: {
      questionF: "Sa diète quotidienne:",
      questionE: "Daily diet: ",
      response: "",
      type: "text",
      required: false,
    },
    20: {
      questionF: "Son statut vaccinal:",
      questionE: "Vaccination status:",
      response: "",
      type: "text",
      required: false,
    },
    21: {
      questionF: "Prévention antiparasitaire:",
      questionE: "Parasite prevention:",
      response: "",
      type: "text",
      required: false,
    },
    22: {
      questionF: "Des allergies connues?",
      questionE: "Known allergies:",
      response: "",
      type: "text",
      required: false,
    },
    23: {
      questionF: "Est-ce que votre animal va à l’extérieur?",
      questionE: "Does your pet go outside?",
      response: "",
      type: "radio",
      required: false,
    },
    24: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    25: {
      questionF:
        "Décrivez le comportement de votre animal en milieu vétérinaire (calme, anxieux, énergique, etc.):",
      questionE:
        "What is your pet’s behaviour in a veterinary environment? (calm, anxious, energetic, etc.):",
      response: "",
      type: "text",
      required: false,
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
