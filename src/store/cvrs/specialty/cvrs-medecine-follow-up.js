"use strict";
import { reactive } from "vue";
// import { ContentEmail } from "../../../class/createContentEmail.js";
import { ContentEmail } from "../../../class/createContentEmailNew.js";

const state = reactive({
  titre: "Médecine interne, suivi",
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
      questionF: "Pour quel problème de santé venez-vous en suivi? *",
      questionE: "For what health condition is the follow-up appointment? *",
      response: "",
      type: "text",
      required: true,
      margin: "0",
    },
    2: {
      questionF:
        "Depuis la dernière visite, avez-vous consulté un autre vétérinaire pour ce problème de santé?",
      questionE:
        "Have you consulted another veterinarian for this condition since the last visit?",
      response: "",
      type: "radio",
      required: false,
      margin: "1rem 0 0rem",
    },
    3: {
      questionF: "Si oui, d’autres traitements ont-ils été essayés?",
      questionE: "If so, have other treatments been tried?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    4: {
      questionF:
        "De manière générale, comment trouvez-vous l’état de santé de votre animal?",
      questionE: "In general, how do you find your animal’s condition? ",
      response: "",
      type: "radio3",
      value1F: "Stable",
      value2F: "Amélioré",
      value3F: "Détérioré",
      value1E: "Stable",
      value2E: "Improve",
      value3E: "Deteriorated",
      required: false,
      margin: "2rem 0 0rem",
    },
    5: {
      questionF: "Précisez :",
      questionE: "Please explain :",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    6: {
      questionF: "Comment est le niveau d’énergie de votre animal?",
      questionE: "How is your animal’s energy level?",
      response: "",
      type: "radio3",
      value1F: "Stable",
      value2F: "Amélioré",
      value3F: "Détérioré",
      value1E: "Stable",
      value2E: "Improve",
      value3E: "Deteriorated",
      required: false,
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
    9: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    10: {
      questionF:
        "Votre animal démontre-t-il de la toux, des éternuements ou des écoulements nasaux?",
      questionE: "Is your animal coughing, sneezing or having nasal discharge?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    11: {
      questionF: "Au besoin, précisez:",
      questionE: "If so, describe these changes:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    12: {
      questionF:
        "Votre animal présente-t-il des selles molles ou de la diarrhée?",
      questionE: "Does your animal have soft stool or diarrhea?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    13: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    14: {
      questionF:
        "Votre animal a-t-il des épisodes de vomissement ou de régurgitation?",
      questionE: "Does your pet have episodes of vomiting or regurgitation?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    15: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    16: {
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
    17: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    18: {
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
    19: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    20: {
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
    21: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    22: {
      questionF:
        "Quelle est la diète quotidienne de votre animal? * (Veuillez aussi inclure gâteries et nourriture de table)",
      questionE:
        "What is your pet's daily diet? * (Please also include treats and table food)",
      response: "",
      type: "text",
      required: true,
      margin: "2rem 0 1rem",
    },
    23: {
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
    24: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    25: {
      questionF: "Est-ce que vous avez déjà vu des tiques sur votre animal?",
      questionE: "Have you ever seen ticks on your pet?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    26: {
      questionF: "Si oui, il y a combien de temps?",
      questionE: "If so, how long ago?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    27: {
      questionF: "Est-ce que votre animal a voyagé en dehors du Québec? ",
      questionE: "Did your pet travel outside of Quebec?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    28: {
      questionF: "Si oui, précisez le ou les endroit(s) : ",
      questionE: "If yes, please specify location(s) : ",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    29: {
      questionF: "Votre animal prend-il présentement des médicaments ?",
      questionE: "Is your animal currently taking any medication?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    30: {
      questionF:
        "Si oui, indiquer la posologie (nom, dosage, fréquence d’administration) :",
      questionE: "If so, please indicate name, dosage and frequency: ",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    31: {
      questionF:
        "Avez-vous de la difficulté à administrer les médicaments à votre animal?",
      questionE:
        "Do you have any difficulty administering medication to your animal?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    32: {
      questionF: "Au besoin, précisez:",
      questionE: "If needed, specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    33: {
      questionF: "Avez-vous besoin de renouvellements de médicaments?",
      questionE: "Do you need medication renewals?",
      response: "",
      type: "radio",
      required: true,
      margin: "2rem 0 0rem",
    },
    34: {
      questionF: "Si oui, pour lesquels?",
      questionE: "If so, for which ones? ",
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
