"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../class/createContentEmail.js";

const state = reactive({
  titre: "Formulaire générale MTRL",
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
      questionF: "Quelle est la raison de votre visite aujourd'hui? *",
      questionE: "What is the reason for your consultation today? *",
      response: "",
      type: "text",
      required: true,
    },
    2: {
      questionF:
        "Décrivez-le ou les problème(s) en détail et depuis combien de temps cela dure.",
      questionE:
        "Can you describe the problem(s) in depth and when it (they) started:",
      response: "",
      type: "text",
      required: false,
    },
    3: {
      questionF:
        "Cette condition s’est-elle améliorée, détériorée ou est stable depuis son apparition?	",
      questionE: "How is your animal’s condition since its apparition?",
      response: "",
      type: "radio3",
      value1F: "Améliorée",
      value2F: "Stable",
      value3F: "Détériorée",
      value1E: "Increased",
      value2E: "Stable",
      value3E: "Decreased",
      required: false,
    },
    4: {
      questionF: "Décrivez brièvement son évolution:",
      questionE: "Please briefly describe its evolution:",
      response: "",
      type: "text",
      required: false,
    },
    5: {
      questionF: "Avez-vous consulté un vétérinaire pour cette condition?",
      questionE: "Have you consulted another veterinarian for this condition?",
      response: "",
      type: "radio",
      required: false,
    },
    6: {
      questionF: "Si oui, indiquez la date de la dernière visite vétérinaire",
      questionE: "If so, please indicate the date of the last consultation:",
      response: "",
      type: "text",
      required: false,
    },
    7: {
      questionF: "Des tests diagnostiques ont-ils été faits?",
      questionE: "Has any diagnostic testing been made?",
      response: "",
      type: "radio",
      required: false,
    },
    8: {
      questionF:
        "Si oui, lesquels (radiographies, échographie, test de sang, analyse d’urine, etc..)?",
      questionE:
        "If so, which ones (ultrasound, X-rays, blood tests, urine analysis, etc..)?",
      response: "",
      type: "text",
      required: false,
    },
    9: {
      questionF: "Est-ce que votre animal mange normalement?",
      questionE: "Is your pet eating as usual?",
      response: "",
      type: "radio",
      required: false,
    },
    10: {
      questionF: "Si non, depuis combien de temps?",
      questionE: "If not, since when?",
      response: "",
      type: "text",
      required: false,
    },
    11: {
      questionF: "Est-ce que votre animal présente des vomissements",
      questionE: "Is your pet vomiting?",
      response: "",
      type: "radio",
      required: false,
    },
    12: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    13: {
      questionF: "Est-ce que votre animal présente de la diarrhée?",
      questionE: "Does your pet have diarrhea?",
      response: "",
      type: "radio",
      required: false,
    },
    14: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    15: {
      questionF: "Est-ce que votre animal présente des urines anormales?",
      questionE: "Is your pet’s urine abnormal?",
      response: "",
      type: "radio",
      required: false,
    },
    16: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    17: {
      questionF: "Est-ce que votre animal présente de la toux?",
      questionE: "Is your pet coughing? ",
      response: "",
      type: "radio",
      required: false,
    },
    18: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    19: {
      questionF:
        "Est-ce que votre animal boit plus d’eau et urine plus qu’à l’habitude?",
      questionE: "Is your animal drinking and urinating more than usual?",
      response: "",
      type: "radio",
      required: false,
    },
    20: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    21: {
      questionF: "Est-ce que votre animal présente une perte de poids?",
      questionE: "Did your pet lose weight?",
      response: "",
      type: "radio",
      required: false,
    },
    22: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    23: {
      questionF: "Antécédents médicaux connus:",
      questionE: "Known medical history: ",
      response: "",
      type: "text",
      required: false,
    },
    24: {
      questionF:
        "Médicament(s) d’ordonnance ou vente libre et supplément(s) pris actuellement. Merci d’indiquer le nom, la posologie et l’heure d’administration:",
      questionE:
        "Medication (prescribed or OTC) or supplements currently being taken. Please specify name, dosage, and administration hours:",
      response: "",
      type: "text",
      required: false,
    },
    25: {
      questionF:
        "Quelle est la diète quotidienne de votre animal? (Veuillez aussi inclure gâteries et nourriture de table):",
      questionE: "Daily diet (please also include treats and table food):",
      response: "",
      type: "text",
      required: false,
    },
    26: {
      questionF: "Son statut vaccinal:",
      questionE: "Vaccination status:",
      response: "",
      type: "text",
      required: false,
    },
    27: {
      questionF: "Prévention antiparasitaire:",
      questionE: "Parasite prevention:",
      response: "",
      type: "text",
      required: false,
    },
    28: {
      questionF: "Des allergies connues?",
      questionE: "Known allergies:",
      response: "",
      type: "text",
      required: false,
    },
    29: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    30: {
      questionF: "Est-ce que votre animal va à l’extérieur?",
      questionE: "Does your pet go outside?",
      response: "",
      type: "radio",
      required: false,
    },
    31: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify",
      response: "",
      type: "text",
      required: false,
    },
    32: {
      questionF: "Est-ce que votre animal cohabite avec d’autres animaux?",
      questionE: "Do you have other animals at home?",
      response: "",
      type: "radio",
      required: false,
    },
    33: {
      questionF: "Précisez (nombre, espèce):",
      questionE: "Please specify (number, species):",
      response: "",
      type: "text",
      required: false,
    },
    34: {
      questionF:
        "Décrivez le comportement de votre animal en milieu vétérinaire (calme, anxieux, énergique, etc.):",
      questionE:
        "What is your pet’s behaviour in a veterinary environment? (calm, anxious, energetic, etc.):",
      response: "",
      type: "text",
      required: false,
    },
    35: {
      questionF: "Avez-vous des assurances pour votre animal?",
      questionE: "Do you have insurance for your animal?",
      response: "",
      type: "radio",
      required: false,
    },
    36: {
      questionF: "Si oui, avec quelle compagnie?",
      questionE: "If so, which company?",
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
