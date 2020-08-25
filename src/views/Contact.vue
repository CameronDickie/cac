<template>
  <v-container>
    <v-card flex class="text-center">
      <v-card-title>How You Can Join Us</v-card-title>
    </v-card>
    <v-flex class="text-center justify-center mx-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdpdpIjhpTaV0m5GBcYAOgKcrpi7VWseBG8LbzggkuykZ0gIw/viewform?embedded=true"
        width="640px"
        height="3450px"
        frameborder="0"
      ></iframe>
    </v-flex>

    <v-card flex class="text-left">
      <v-card-title>Send us an e-mail!</v-card-title>
      <v-card-subtitle>This is the best way to get into contact with us</v-card-subtitle>
    </v-card>
    <ContactForm />
  </v-container>
</template>

<script>
import ContactForm from "@/components/Contact_Form.vue";

export default {
  name: "Contact",
  components: {
    ContactForm,
  },
  data() {
    return {};
  },
};
</script>
<style>
</style>