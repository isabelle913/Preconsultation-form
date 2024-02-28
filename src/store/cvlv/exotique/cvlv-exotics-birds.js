"use strict";
import { reactive } from "vue";
import { ContentEmail } from "../../../class/createContentEmail.js";

const state = reactive({
  titre: "Exotiques, Oiseaux, 1er RDV",
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
      questionF: "Est-ce que votre oiseau mange normalement?",
      questionE: "Is your bird eating as usual?",
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
        "Avez-vous noté des vomissements ou des régurgitations, ou des efforts de vomissements/régurgitations?",
      questionE:
        "Have you noticed any vomiting, regurgitations or any efforts to vomit/regurgitate?",
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
        "Est-ce que votre oiseau présente des selles anormales? (Ex. : diarrhée/selles plus liquides, selles plus petites que la normale, couleur anormale, odeur anormale, etc…)",
      questionE:
        "Does your bird present abnormal stools? (Ex: Diarrhea/soft stools, smaller stools than usual, unusual colour, foul smell) ",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    7: {
      questionF:
        "Si oui, depuis quand? À noter : Les fientes d’oiseaux comportent 3 éléments distincts : la selle (la partie généralement formée et de couleur brunâtre/verdâtre), l’urate (la partie blanche), et l’urine (la partie liquide, transparente).",
      questionE:
        "If so, since when? Note: Bird droppings include 3 distinct elements: the feces (the part that is usually well-formed and brownish/greenish), the urates (the part that is white), and the urine (the liquid, transparent part)",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    8: {
      questionF: "Est-ce que votre oiseau a perdu du poids récemment? ",
      questionE: "Did your bird lose weight recently?",
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
      margin: "2rem 0 1rem",
    },
    10: {
      questionF: "Antécédents médicaux connus:",
      questionE: "Please describe any known medical history:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    11: {
      questionF:
        "Médicament(s) d’ordonnance et/ou vente libre, et supplément(s) pris actuellement: Merci d’indiquer le nom, la posologie et l’heure d’administration:",
      questionE:
        "Medication (prescribed or over the counter) or supplements currently being taken: Please specify name, dosage, and administration hours:",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    12: {
      questionF:
        "Où avez-vous adopté votre oiseau, et quel était son âge approximatif au moment de l’adoption?",
      questionE:
        "Where did you adopt your bird from, and what was its approximate age at the time of adoption?",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    13: {
      questionF:
        "A-t-il été élevé à la main? (contrairement à être nourri par ses parents jusqu’au sevrage) ",
      questionE:
        "Was it hand-fed? (as opposed to being fed by its parents until weaned)",
      response: "",
      type: "radio3",
      value1F: "Oui",
      value2F: "Non",
      value3F: "Ne sais pas",
      value1E: "Yes",
      value2E: "No",
      value3E: "Unknow",
      required: false,
      margin: "2rem 0 1rem",
    },
    14: {
      questionF: "Est-ce que votre oiseau a déjà pondu?",
      questionE: "Has your bird ever laid eggs?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    15: {
      questionF:
        "Si oui, à quelle fréquence? À quand remonte sa dernière ponte?",
      questionE: "If so, how often? When was its last clutch?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    16: {
      questionF:
        "Est-ce que votre oiseau a tendance à gruger des objets en métal?",
      questionE: "Does your bird have a tendency to gnaw on metal objects?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    17: {
      questionF:
        "Décrivez sa cage: Incluez les dimensions approximatives, les accessoires, le nombre de perchoirs et la texture de ceux-ci (ex : bois, corde, ciment, plastique), le type de substrat utilisé dans le fond de la cage, etc…",
      questionE:
        "Describe your bird’s cage. Include the approximate dimensions, accessories, number of perches and their texture (ex: wood, rope, cement, plastic), the type of substrate used to cover the bottom of the cage, etc…",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    18: {
      questionF: "Est-ce que votre oiseau prend des bains?",
      questionE: "Does your bird bathe?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    19: {
      questionF:
        "Si oui, à quelle fréquence et où/comment ? (Ex : dans la douche, dans le lavabo, dans son bol d’eau, etc…)",
      questionE:
        "If so, at what frequency and how/where? (Ex: In the shower, in the sink, in its water dish, etc…)",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    20: {
      questionF: "Est-ce que vous couvrez la cage la nuit?",
      questionE: "Do you cover your bird’s cage at night?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    21: {
      questionF: "Si oui, pendant combien d’heures chaque nuit?",
      questionE: "If so, for how many hours each night?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    22: {
      questionF:
        "Est-ce que l’oiseau est dans le noir total pendant cette période?",
      questionE: "Is the bird in complete darkness during this time?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 1rem",
    },
    23: {
      questionF:
        "Qu’est-ce que vous lui donnez à manger et en quelle quantité (incluant les gâteries, la nourriture de table, les noix, etc…)? Précisez si vous lui donnez un mélange de graines ou de la moulée, ainsi que le nom de la marque que vous lui donnez.",
      questionE:
        "What do you feed your bird and in what quantity (including treats, table food, nuts, etc..)? Please specify if you use a seed mix or pellets for feeding, and the brand name.",
      response: "",
      type: "text",
      required: false,
      margin: "2rem 0 1rem",
    },
    24: {
      questionF: "Est-ce qu’il y a d’autres animaux à la maison ?",
      questionE: "Do you have other pets?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    25: {
      questionF:
        "Si oui, veuillez les énumérer et mentionner s’ils sont en contact direct ou pas:",
      questionE:
        "If so, please list them and specify if they are in direct contact or not:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 2rem",
    },
    26: {
      questionF:
        "Est-ce que votre oiseau est sorti de sa cage à tous les jours ?",
      questionE: "Is your bird taken out of its cage every day?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    27: {
      questionF: "Si oui, pendant combien de temps en moyenne?",
      questionE: "If so, for how long on average?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    28: {
      questionF: "Faites-vous une rotation de ses jouets?",
      questionE: "Do you do a rotation of its toys?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    29: {
      questionF: "Si oui, à quelle fréquence ? ",
      questionE: "If so, how often?",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    30: {
      questionF:
        "Est-ce que vous faites de l’enrichissement avec votre oiseau?",
      questionE: "Do you provide any enrichment opportunities for your bird?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
    },
    31: {
      questionF: "Si oui, nommez des exemples.",
      questionE: "If so, please list some examples:",
      response: "",
      type: "text",
      required: false,
      margin: "0rem 0 1rem",
    },
    32: {
      questionF:
        "Est-ce que votre oiseau est exposé à la fumée de cigarette ? ",
      questionE: "Is your bird exposed to cigarette smoke?",
      response: "",
      type: "radio",
      required: false,
      margin: "2rem 0 0rem",
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
