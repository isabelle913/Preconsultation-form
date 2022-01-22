<template>
  <div>
    <label>{{ question }}</label>
    <q-input
      outlined
      v-model="response"
      type="text"
      autogrow
      clearable
      lazy-rules
      :rules="[
        (val) =>
          (val && val.length > 0) ||
          'Veuillez inscrire votre réponse / Please type something ',
      ]"
    />
  </div>
</template>

<script>
export default {
  props: ["question", "response"],
};
</script>
