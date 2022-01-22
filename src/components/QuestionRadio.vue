<template>
  <div class="radio-container">
    <label class="radio-question">{{ question }}</label>
    <div class="radio-response">
      <q-radio v-model="response" val="oui" label="Oui" />
      <q-radio v-model="response" val="non" label="Non" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["question", "response"],
};
</script>
