"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../../../class/createContentEmail.js";

const state = reactive({
  titre: "Exotiques, RDV de suivi",
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
      questionF:
        "Décrivez l’évolution des symptômes de votre animal depuis votre dernière visite: *",
      questionE:
        "Describe the evolution of your animal’s symptoms since your last visit: *",
      response: "",
      type: "text",
      required: true,
      margin: "2rem 0 1rem",
    },
    2: {
      questionF:
        "Comment décrivez-vous son état général, son appétit et sa production de selles et d’urine?",
      questionE:
        "How would you describe your pet’s general condition, appetite, and stool and urine production?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    3: {
      questionF:
        "Quelle médication donnez-vous présentement ? Précisez la quantité donnée à chaque administration, la fréquence, ainsi que le moment de la dernière administration.",
      questionE:
        "What medication are you giving at the moment? Specify the quantity given each time, the frequency, as well as when it was last administered.",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },

    4: {
      questionF:
        "Avez-vous de la difficulté avec l’administration des médicaments? 	",
      questionE: "Do you have difficulties with administering the medication?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    5: {
      questionF:
        "Si vous ne donnez plus de médicament, à quand remonte la dernière dose? ",
      questionE:
        "If you no longer give any medication, when was the last dose?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    6: {
      questionF:
        "Si applicable, avez-vous noté une détérioration dans l’état de votre animal depuis l’arrêt des médicaments?",
      questionE:
        "If applicable, did you note any deterioration in your animal’s condition since the end of the medication?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    7: {
      questionF:
        "Avez-vous noté de nouveaux problèmes depuis la dernière visite?",
      questionE: "Did you notice any new issues since your last visit? ",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    8: {
      questionF: "Si oui, veuillez les décrire:",
      questionE: "If so, please describe:",
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

    console.log(body);
    console.log(subject);

    axios
      .post("/_outilsinternes/mail.php", {
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
