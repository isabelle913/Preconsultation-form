"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../../../class/createContentEmail.js";

const state = reactive({
  titre: "Exotiques, Reptiles, 1er RDV",
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
        "Quelle est la raison de votre visite? *  Décrivez en détail les symptômes que vous avez observés et la durée de ces symptômes.",
      questionE:
        "What is the reason for your consultation today? * Please describe in detail the symptoms that you have observed as well as their duration.",
      response: "",
      type: "text",
      required: true,
      margin: "0rem 0 1rem",
    },
    2: {
      questionF: "Est-ce que votre reptile mange normalement?",
      questionE: "Is your pet eating as usual?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    3: {
      questionF:
        "Si non, détaillez la perte d’appétit et la durée de celle-ci:",
      questionE:
        "If not, please specify the loss of appetite and its duration:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    4: {
      questionF: "Avez-vous noté des vomissements ou des régurgitations?",
      questionE: "Have you noticed any vomiting or regurgitations?",
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
        "Est-ce que votre reptile présente des selles anormales? (Ex : diarrhée/selles plus liquides, selles plus petites que la normales, couleur anormale, odeur anormale, etc…)",
      questionE:
        "Does your reptile present unusual stools? (Ex: Diarrhea/soft stools, smaller stools than usual, unusual colour, foul smell)",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    7: {
      questionF:
        "Si oui, depuis quand? À noter : Les fientes de reptile comportent 3 éléments distincts : La selle (la partie généralement formée et de couleur brunâtre/verdâtre), l’urate (la partie blanche), l’urine (la partie liquide, transparente).",
      questionE:
        "If so, since when? Note: Reptile droppings include 3 distinct elements: the feces (the part that is usually well-formed and brownish/greenish), the urates (the part that is white), the urine (the liquid, transparent part).",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    8: {
      questionF: "Est-ce que votre reptile a perdu du poids récemment?",
      questionE: "Did your reptile lose weight recently?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    9: {
      questionF:
        "Est-ce qu’il y a eu un stress ou un changement dans vos/ses habitudes et/ou environnement récemment?",
      questionE:
        "Has there been any stressful events or a change in your/its habits and/or environment recently?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    10: {
      questionF: "Au besoin, précisez:",
      questionE: "Please specify:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    11: {
      questionF: "Antécédents médicaux connus:",
      questionE: "Please describe any known medical history:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    12: {
      questionF:
        "Médicament(s) d’ordonnance et/ou vente libre, et supplément(s) pris actuellement. Merci d’indiquer le nom, la posologie et l’heure d’administration:",
      questionE:
        "Medication (prescribed or over the counter) or supplements currently being taken. Please specify name, dosage, and administration hours:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    13: {
      questionF:
        "Où avez-vous adopté votre reptile et quel était son âge approximatif au moment de l’adoption?",
      questionE:
        "Where did you adopt your reptile from, and what was its approximate age at the time of adoption?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },

    14: {
      questionF: "Est-ce que votre reptile a déjà pondu?",
      questionE: "Has your reptile ever laid eggs?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    15: {
      questionF:
        "Si oui, à quelle fréquence? À quand remonte sa dernière ponte?",
      questionE: "If so, how often? When was the last time?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },

    16: {
      questionF:
        "Décrivez l’environnement dans lequel vous gardez votre reptile.Incluez les dimensions approximatives et les accessoires.",
      questionE:
        "Describe the environment in which you keep your reptile. Include the approximate dimensions of the area and the accessories.",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    17: {
      questionF:
        "Est-ce qu’il y a une cachette au point chaud ainsi qu’au point froid?",
      questionE:
        "Is there a hide-out under the basking spot as well as at the cool area?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    18: {
      questionF: "Quel type de substrat utilisez-vous?",
      questionE: "What type of substrate do you use",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    19: {
      questionF: "Est-ce qu’il y a un bol d’eau dans la cage?",
      questionE: "Is there a water bowl in the cage?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    20: {
      questionF:
        "Est-ce que le bol d’eau est assez gros pour permettre à votre reptile de s’y submerger?",
      questionE:
        "If so, is the water bowl large enough to allow your reptile to submerge itself completely?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 0rem",
    },
    21: {
      questionF: "Donnez-vous des bains à votre reptile?",
      questionE: "Do you give your reptile baths?",
      response: "",
      type: "radio",
      required: false,
      margin: "0rem 0 0rem",
    },
    22: {
      questionF: "Si oui, à quelle fréquence?",
      questionE: "If so, how often?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },

    23: {
      questionF: "Quelle est la source de chaleur?",
      questionE: "What is the heat source?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    24: {
      questionF: "Est-ce qu’il y a une source de chaleur la nuit?",
      questionE: "Is there also a heat source during the night?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    25: {
      questionF:
        "Si oui, est-ce que la source de chaleur produit aussi de la lumière?",
      questionE: "If so, does this heat source also produce light?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    26: {
      questionF: "Est-ce que vous mesurez la température dans la cage?",
      questionE: "Do you measure the temperature inside the cage?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    27: {
      questionF:
        "Si oui, quelle est la valeur au point chaud et au point froid ? ",
      questionE:
        "If so, what are the values at the basking spot and at the cool area? ",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    28: {
      questionF: "Quel type de thermomètre utilisez-vous?",
      questionE: "What kind of thermometer do you use?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    29: {
      questionF: "Est-ce que vous mesurez l’humidité ambiante?",
      questionE: "Do you measure the ambient humidity?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    30: {
      questionF: "Si oui, quelle est la valeur moyenne?",
      questionE: "If so, what is the average value?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    31: {
      questionF:
        "Quel est le cycle de lumière et de noirceur (combien d’heures de lumière et combien d’heures de noirceur par jour) ? ",
      questionE:
        "What is the length of the light and dark cycle (how many hours of daylight and darkness each day)?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    32: {
      questionF: "Est-ce qu’il y a source d’UVB?",
      questionE: "Is there a UVB source?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    33: {
      questionF: "Si oui, à quelle fréquence changez-vous la lumière?",
      questionE: "If so, how often do you change the light?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    34: {
      questionF:
        "Quelle est sa nourriture, quelle quantité et à quelle fréquence est-il nourri ? Précisez si les proies sont vivantes ou pas. ",
      questionE:
        "What do you feed your reptile, in what quantities and how often? Please specify if the prey is live or not. ",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    35: {
      questionF: "Est-ce que vous donnez des suppléments?",
      questionE: "Do you give supplements?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    36: {
      questionF:
        "Si oui, lesquels, à quelle fréquence et de quelle façon ?(Ex : saupoudré sur la nourriture, dans un bol, etc…)",
      questionE:
        "If so, which kind of supplements, how often and how (ex: sprinkled on food, in a bowl, etc…)?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    37: {
      questionF: "Est-ce que votre reptile a des problèmes de mue?",
      questionE: "Does your reptile have shedding issues?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    38: {
      questionF: "Si oui, comment est-ce que vous y remédiez?",
      questionE: "If so, what do you do to help?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    39: {
      questionF: "À quand remonte la dernière mue?",
      questionE: "When was its last shed?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    40: {
      questionF: "Y a-t-il d’autres animaux à la maison?",
      questionE: "Do you have other pets?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    41: {
      questionF:
        "Si oui, les énumérer et mentionner s’ils sont en contact direct ou pas:",
      questionE:
        "If so, please list them and specify if they are in direct contact or not:",
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
