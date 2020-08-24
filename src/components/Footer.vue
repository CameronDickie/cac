<template>
  <v-footer padless>
    <v-card flat tile class="grey lighten-5 text-center" width="100vw">
      <v-card-text width="100vw">
        <v-btn v-for="icon in icons" :key="icon" :href="icon.url" class="mx-4" icon>
          <v-icon color="black" size="24px">{{ icon.img }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="black--text text-center grey lighten-5" width="100vw">
        <a href="mailto:climateactioncarleton@gmail.com">climateactioncarleton@gmail.com</a>
      </v-card-text>
      <v-divider style="padding-bottom:10px"></v-divider>
      <v-card-text class="black--text pt-0" width="100vw">{{acknowledgement}}</v-card-text>
    </v-card>
    <v-divider></v-divider>
    <v-card-text class="black--text text-center grey lighten-5" width="100vw">
      {{ new Date().getFullYear() }} —
      <v-btn
        flat
        tile
        class="text-decoration-underline font-weight-bold"
        @click="overlay = !overlay"
      >CMXX</v-btn>
    </v-card-text>
    <v-overlay absoulte :value="overlay" class="text-center">
      <v-card class="grey lighten-5 black--text" style="padding:100px">
        Designed by
        <p class="font-weight-bold">
          Cameron Dickie @
          <a href="https://cmxx.ca">CMXX.ca</a>
        </p>partnered with
        <p class="font-weight-bold">Pareena Sumbli @ <a href="mailto:pareenasumbli@gmail.com">pareenasumbli@gmail.com</a></p>
      </v-card>
      <v-btn @click="overlay = false">Close</v-btn>
    </v-overlay>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        {
          img: "mdi-facebook",
          url: "https://www.facebook.com/ClimateActionCarleton",
        },
        { img: "mdi-twitter", url: "https://twitter.com/ClimateActionCU" },
        {
          img: "mdi-instagram",
          url: "https://www.instagram.com/climateactioncarleton/",
        },
      ],
      overlay: false,
      acknowledgement:
        "Climate Action Carleton acknowledges that our work takes places on unceded and unsurrendered Algonquin-Anishinibakeg territory",
    };
  },
};
</script>
