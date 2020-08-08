<template>
  <div class="home mx-auto" style="max-width:1455px;">
    <v-card>
      <Carousel />
    </v-card>
    <div style="padding:20px">
    </div>
    <v-card d-block-flex class="text-center">
      <h2 class="display-2 font-weight-bold mb-6">What is Climate Action Carleton?</h2>
      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >Founded in 2019, Climate Action Carleton is a student activist group based on the Carleton University campus that advocates for climate action and climate justice. We are an independent group run entirely by students.</v-responsive>
    </v-card>
    <!-- <Form/> -->
    <div style="height:20px;"></div>
    <!-- <Stepper/> -->
    <div style="height:40px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
  data() {
    return {
      linkHover: false,
    };
  },
};
</script>
