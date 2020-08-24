<template>
  <div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdpdpIjhpTaV0m5GBcYAOgKcrpi7VWseBG8LbzggkuykZ0gIw/viewform?embedded=true"
      width="640"
      height="3039"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >How You Can Join Us</iframe>
    <ContactForm />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdpdpIjhpTaV0m5GBcYAOgKcrpi7VWseBG8LbzggkuykZ0gIw/viewform?embedded=true"
      width="640"
      height="3039"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >Loading…</iframe>
  </div>
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