<template>
  <div>
    <label>{{ question }}</label>
    <q-input outlined v-model="response" type="text" autogrow clearable />
  </div>
</template>

<script>
export default {
  props: ["question", "response"],
};
</script>
