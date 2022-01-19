<template>
  <q-page class="page">
    <h1>Français</h1>
    <p>
      Veuillez remplir les informations suivantes concernant votre animal au
      mieux de vos connaissances:
    </p>
    <br />
    <br />
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div>
        <label for="">Quelle est la raison de présentation aujourd’hui :</label>
        <q-input
          filled
          v-model="name1"
          type="text"
          autogrow
          clearable
          lazy-rules
          autofocus
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div>
        <label for=""
          >Plus en détails, décrives le ou les problème(s) et depuis combien de
          temps :</label
        >
        <q-input
          outlined
          v-model="name2"
          type="text"
          autogrow
          clearable
          lazy-rules
          autofocus
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div>
        <label for="">Quelle est la raison de présentation aujourd’hui :</label>
        <q-input
          filled
          v-model="name3"
          type="text"
          autogrow
          label="Your name *"
          hint="Name and surname"
          clearable
          lazy-rules
          autofocus
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
            filled
            v-model="name3"
            type="text"
            autogrow
            clearable
            lazy-rules
            autofocus
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
      </div>
      <div>
        <label for=""
          >Est-ce que votre animal présente des vomissements :
        </label>
        <q-radio v-model="mange" val="line" label="Oui" />
        <q-radio v-model="mange" val="rectangle" label="Non" />
      </div>
      <div>
        <label for="">Est-ce que votre animal présente de la diarrhée : </label>
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
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, enim
      fugit quibusdam autem quidem eaque esse dolores eos, similique, facere
      pariatur nulla voluptatum voluptate! Temporibus nostrum omnis architecto
      praesentium, modi soluta impedit explicabo optio ab harum veritatis cum
      vero cupiditate, recusandae cumque? Temporibus quaerat magni minima quae
      repellendus iusto amet, reprehenderit error et esse itaque molestias.
      Animi corrupti iusto dicta obcaecati est temporibus alias ex quibusdam at!
      Deserunt, ipsam ipsum accusantium odio corporis eaque dignissimos laborum.
      Beatae a rem, accusantium, eius, hic corrupti sapiente eaque ex id libero
      minima laudantium quaerat est maiores nostrum saepe rerum provident
      similique odio ratione quia praesentium! Voluptatem quis corporis
      excepturi itaque, blanditiis deserunt explicabo. Tempore voluptatem veniam
      ratione voluptas, nemo quaerat impedit sit veritatis, quam harum quae non
      dicta libero nulla qui iste accusantium rem a iusto optio dolorum numquam
      praesentium aut? Minus, mollitia suscipit cupiditate distinctio quae,
      excepturi dolore pariatur voluptates nesciunt maxime voluptatem nobis
      architecto corporis dolor veniam? Velit quasi reiciendis earum rem
      inventore beatae, laborum architecto at ullam eveniet aliquid perspiciatis
      totam neque omnis doloribus quis quos repellat sequi provident a? Pariatur
      perferendis temporibus veniam. Debitis excepturi nisi dolore minima?
      Aspernatur dolore corporis molestias itaque eligendi vero repellat sit,
      saepe dicta!
    </p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name1: "",
      name2: "",
      name3: "",
      age: "",
      mange: "",
    };
  },
};
</script>

<style></style>
