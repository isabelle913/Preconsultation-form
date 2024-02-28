"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../../../class/createContentEmail.js";

const state = reactive({
  titre: "Exotiques, Mammifères, 1er RDV",
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
        "Quelle est la raison de votre visite? *  Décrivez en détail les symptômes que vous avez observés et la durée de ces symptômes:",
      questionE:
        "What is the reason for your consultation today? * Please describe in detail the symptoms that you have observed as well as their duration:",
      response: "",
      type: "text",
      required: true,
      margin: "0rem 0 1rem",
    },
    2: {
      questionF:
        "Est-ce que votre animal mange normalement? Exemples d’appétit anormal : appétit diminué, manque d’intérêt pour certains aliments (ex. : refuse le foin, etc..)",
      questionE:
        "Is your pet eating as usual? Examples of unusual eating habits may include diminished appetite, loss of interest for certain food items (Ex: refusing hay, etc...)",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    3: {
      questionF:
        "Si non, veuillez préciser la perte d’appétit et la durée de celle-ci:",
      questionE:
        "If not, please specify the loss of appetite and its duration:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    4: {
      questionF:
        "Si votre animal est un furet ou un hérisson, est-ce qu’il présente des vomissements?",
      questionE: "If your pet is a ferret or a hedgehog, is it vomiting?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    5: {
      questionF: "Si oui, veuillez préciser:",
      questionE: "If so, please specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    6: {
      questionF:
        "Est-ce que votre animal présente des selles anormales? (Ex. : diarrhée, selles plus petites que la normale, selles en plus petite quantité que la normale, présence de poils dans les selles, etc…)",
      questionE:
        "Does your pet present abnormal stools? (Ex: Diarrhea, smaller stools than usual, stools in smaller quantities than usual, presence of hair in the stools, etc…)",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    7: {
      questionF: "Si oui, depuis quand:",
      questionE: "If so, since when:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    8: {
      questionF:
        "Si votre animal est un lapin, est-ce qu’il est en mue présentement?",
      questionE: "If your pet is a rabbit, is it shedding at the moment? ",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    9: {
      questionF: "Est-ce que votre animal a perdu du poids récemment? ",
      questionE: "Did your pet lose weight recently?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    10: {
      questionF:
        "Est-ce qu’il y a eu un stress ou un changement dans vos/ses habitudes et/ou environnement récemment?",
      questionE:
        "Has there been any stressful events or a change in your/its habits and/or environment recently?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    11: {
      questionF:
        "Où avez-vous adopté votre animal, et quel était son âge approximatif au moment de l’adoption:",
      questionE:
        "Where did you adopt your pet from, and what was its approximate age at the time of adoption:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    12: {
      questionF: "Antécédents médicaux connus:",
      questionE: "Please describe any known medical history:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    13: {
      questionF:
        "Médicament(s) d’ordonnance et/ou vente libre, et supplément(s) pris actuellement: Merci d’indiquer le nom, la posologie et l’heure d’administration:",
      questionE:
        "Medication (prescribed or over the counter) or supplements currently being taken: Please specify name, dosage, and administration hours:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    14: {
      questionF:
        "Décrivez l’endroit dans lequel vous gardez votre animal. Est-ce un enclos, une cage, ou est-il en liberté? Incluez les dimensions approximatives de l’endroit, le substrat de la litière si applicable, et le type de surface au fond de la cage (ex. : tapis, planchers de bois, serviettes, etc…):",
      questionE:
        "Describe the area where you keep your pet. Is it an enclosure, a cage, or is your pet free-run? Include the approximate dimensions of the area, the litter box substrate (if applicable), and what is on the bottom of the cage (ex: carpet, wood floors, towels, etc.):",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },

    15: {
      questionF:
        "Que lui donnez-vous à manger? Inclure la marque de la nourriture, la quantité et la fréquence, en incluant les gâteries:",
      questionE:
        "What do you feed your pet? Please include the brand of food, quantity, and frequency, including treats:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    16: {
      questionF: "Y a-t-il d’autres animaux à la maison?",
      questionE: "Do you have other pets?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    17: {
      questionF:
        "Si oui, les énumérer et mentionner s’ils sont en contact direct ou pas:",
      questionE:
        "If so, please list them and specify if they are in direct contact or not:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    18: {
      questionF: "Est-ce que votre animal est sorti de sa cage tous les jours?",
      questionE: "Is your pet taken out of its cage every day?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    19: {
      questionF: "Si oui, pendant combien de temps en moyenne:",
      questionE: "If so, for how long on average:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    20: {
      questionF: "Est-ce que vous apportez parfois votre animal à l’extérieur?",
      questionE: "Do you bring your pet outdoors?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    21: {
      questionF: "Si oui, est-ce qu’il reçoit des antiparasitaires?",
      questionE: "If so, does it receive dewormers?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 0rem",
    },
    22: {
      questionF: "Si oui, lesquels et à quelle fréquence:",
      questionE: "If so, which ones and at what frequency:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 0rem",
    },
    23: {
      questionF:
        "Si non, voulez-vous qu’on discute de la prévention parasitaire avec vous?",
      questionE: "If not, would you like information regarding dewormers?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 1rem",
    },
    24: {
      questionF: "Est-ce que vous brossez votre animal?",
      questionE: "Do you brush your pet?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    25: {
      questionF: "Si oui, à quelle fréquence:",
      questionE: "If so, how often?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    26: {
      questionF: "Est-ce que vous coupez les griffes de votre animal?",
      questionE: "Do you clip your pet’s nails?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    27: {
      questionF: "Si oui, à quelle fréquence:",
      questionE: "If so, how often?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    28: {
      questionF: "Est-ce que vous nettoyez les oreilles de votre animal?",
      questionE: "Do you clean your pet’s ears?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 0rem",
    },
    29: {
      questionF: "Si oui, à quelle fréquence et avec quel produit:",
      questionE: "If so, how often and with which product:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    30: {
      questionF: "Est-ce que vous donnez des bains à votre animal?",
      questionE: "Do you bathe your pet?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    31: {
      questionF: "Si oui, à quelle fréquence:",
      questionE: "If so, how often:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    32: {
      questionF: "Pour les hérissons: Fournissez-vous une source de chaleur?",
      questionE: "For hedgehogs: Do you provide a heat source?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    33: {
      questionF: "Si oui, laquelle et quelle est la température moyenne:",
      questionE:
        "If so, what kind of heat source and what is the average temperature:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 0rem",
    },
    34: {
      questionF: "Est-ce que l’animal a accès à une source de chaleur la nuit?",
      questionE: "Does your animal have access to a heat source at night?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 0rem",
    },
    35: {
      questionF: "Est-ce que cette source de chaleur produit de la lumière?",
      questionE: "Does this heat source produce light?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 1rem",
    },
    36: {
      questionF: "Pour les furets: Est-ce que votre animal est vacciné?",
      questionE: "For ferrets: Is your pet vaccinated?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    37: {
      questionF: "Si oui, quel(s) vaccin(s) a-t-il reçu, et quand:",
      questionE: "If so, which vaccine(s) did it receive and when:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 0rem",
    },
    38: {
      questionF:
        "Si non, voulez-vous qu’on discute de la vaccination avec vous?",
      questionE: "If not, would you like information regarding vaccination?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 0rem",
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
      .post("/_outilsinternes/mail-exo.php", {
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
