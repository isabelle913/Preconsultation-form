<template>
  <q-page class="page">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <!-- information client -->
      <p class="text-instruction">Vos informations:</p>
      <div class="information-container">
        <div class="information-element">
          <label>Votre nom :</label>
          <q-input
            outlined
            v-model="informationClient.clientName"
            type="text"
            clearable
            lazy-rules
            autofocus
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="information-element">
          <label for="">Nom de votre animal :</label>
          <q-input
            outlined
            v-model="informationClient.patientName"
            type="text"
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
      </div>
      <div class="information-container">
        <div class="information-element">
          <label for="">Votre numéro de téléphone :</label>
          <q-input
            outlined
            v-model="informationClient.phoneNumber"
            type="tel"
            autogrow
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="information-element">
          <label>Votre numéro de dossier si connu:</label>
          <q-input
            outlined
            v-model="informationClient.dossierID"
            type="text"
            clearable
            lazy-rules
          />
        </div>
      </div>
      <div class="separator-red"></div>

      <!-- section question -->
      <p class="text-instruction">
        Veuillez remplir les informations suivantes concernant votre animal au
        mieux de vos connaissances:
      </p>
      <div>
        <label for="">Quelle est la raison de présentation aujourd’hui :</label>
        <q-input
          outlined
          v-model="name1"
          type="text"
          autogrow
          clearable
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div>
        <label for=""
          >Plus en détails, décrives le ou les problème(s) et depuis combien de
          temps :</label
        >
        <q-input outlined v-model="name2" type="text" autogrow clearable />
      </div>
      <div>
        <label for="">Quelle est la raison de présentation aujourd’hui :</label>
        <q-input
          outlined
          v-model="name3"
          type="text"
          autogrow
          clearable
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div>
        <div>
          <label for="">Est-ce que votre animal mange : </label>
          <q-radio v-model="mange" val="line" label="Oui" />
          <q-radio v-model="mange" val="rectangle" label="Non" />
        </div>
        <div>
          <label for="">Si non, depuis combien de temps :</label>
          <q-input
            outlined
            v-model="name3"
            type="text"
            autogrow
            clearable
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
      </div>

      <div class="radio-section">
        <!-- Exemple -->
        <div class="radio-container">
          <div class="section-element-question">
            <label for=""
              >Est-ce que votre animal présente des vomissements :
            </label>
          </div>
          <div class="section-element-response">
            <q-radio v-model="mange" val="line" label="Oui" />
            <q-radio v-model="mange" val="rectangle" label="Non" />
          </div>
        </div>
        <!-- exemple fin -->
        <div>
          <label for=""
            >Est-ce que votre animal présente de la diarrhée :
          </label>
          <q-radio v-model="mange" val="line" label="Oui" />
          <q-radio v-model="mange" val="rectangle" label="Non" />
        </div>
        <div>
          <label for=""
            >Est-ce que votre animal présente des urines anormales:
          </label>
          <q-radio v-model="mange" val="line" label="Oui" />
          <q-radio v-model="mange" val="rectangle" label="Non" />
        </div>
        <div>
          <label for="">Est-ce que votre animal présente de la toux : </label>
          <q-radio v-model="mange" val="line" label="Oui" />
          <q-radio v-model="mange" val="rectangle" label="Non" />
        </div>
        <div>
          <label for=""
            >Est-ce que votre animal présente une augmentation de la prise d’eau
            et des urines :
          </label>
          <q-radio v-model="mange" val="line" label="Oui" />
          <q-radio v-model="mange" val="rectangle" label="Non" />
        </div>
        <div>
          <label for=""
            >Est-ce que votre animal présente une perte de poids :
          </label>
          <q-radio v-model="mange" val="line" label="Oui" />
          <q-radio v-model="mange" val="rectangle" label="Non" />
        </div>
      </div>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      informationClient: {
        dossierID: "",
        clientName: "",
        patientName: "",
        phoneNumber: "",
      },
      questionResponse: {
        1: {
          question: "Quelle est la raison de présentation aujourd’hui : ",
          response: "",
          type: "text",
          required: true,
        },
        2: {
          question:
            "Plus en détails, décrives le ou les problème(s) et depuis combien de temps : ",
          response: "",
          type: "text",
          required: false,
        },
        3: {
          question: "Est-ce que votre animal mange : ",
          response: "",
          type: "radio",
          required: true,
        },
        4: {
          question: "Si non, depuis combien de temps :",
          response: "",
          type: "text",
          required: true,
        },
        5: {
          question: "Est-ce que votre animal présente des vomissements :",
          response: "",
          type: "radio",
          required: true,
        },
        6: {
          question: "Est-ce que votre animal présente de la diarrhée :",
          response: "",
          type: "radio",
          required: true,
        },
        7: {
          question: "Est-ce que votre animal présente des urines anormales:",
          response: "",
          type: "radio",
          required: true,
        },
        8: {
          question: "Est-ce que votre animal présente de la toux :",
          response: "",
          type: "radio",
          required: true,
        },
        9: {
          question:
            "Est-ce que votre animal présente une augmentation de la prise d’eau et des urines : ",
          response: "radio",
          type: "",
          required: true,
        },
        10: {
          question: "Est-ce que votre animal présente une perte de poids :",
          response: "",
          type: "radio",
          required: true,
        },
        11: {
          question: "Antécédents médicaux connus:",
          response: "",
          type: "text",
          required: false,
        },
        12: {
          question:
            "Médicament(s) d’ordonnance et/ou vente libre/supplément(s) pris actuellement (noter le nom, la posologie et l’heure d’administration):",
          response: "",
          type: "text",
          required: false,
        },
        13: {
          question: "Diète quotidienne : ",
          response: "",
          type: "text",
          required: false,
        },
        14: {
          question: "Statut vaccinal : ",
          response: "",
          type: "text",
          required: false,
        },
        15: {
          question: "Prévention antiparasitaire : ",
          response: "",
          type: "text",
          required: false,
        },
        16: {
          question: "Allergies connues :",
          response: "",
          type: "text",
          required: false,
        },
        17: {
          question: "Est-ce que votre animal va à l’extérieur :  ",
          response: "",
          type: "text",
          required: false,
        },
        18: {
          question:
            "Quel est le caractère de votre animal en milieu vétérinaire  (calme, anxieux, énergique, etc) : ",
          response: "",
          type: "text",
          required: false,
        },
      },
    };
  },
};
</script>

<style></style>
