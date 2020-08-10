<template>
  <v-carousel
    cycle
    interval="8000"
    hide-delimiter-background
    show-arrows-on-hover
    touch
    style="margin:auto;"
    max-width="1455"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <div>
        <v-container>
          <v-row>
            <v-col xs3></v-col>
            <v-col xs9>
              <v-card color="grey lighten-5" class="black--text text-h4 text-center">{{item.title}}</v-card>
            </v-col>
            <v-col xs3></v-col>
          </v-row>
          <v-row>
            <v-col xs3></v-col>
            <v-col xs9>
              <v-card color="grey lighten-5" class="black--text text-body-2 text-center">{{item.text}}</v-card>
            </v-col>
            <v-col xs3></v-col>
          </v-row>
        </v-container>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
var imgs = [
  require("../assets/media-content/imgs/img-1.jpg"),
  require("../assets/media-content/imgs/img-3.jpg"),
  require("../assets/media-content/imgs/img-4.jpg"),
  require("../assets/media-content/imgs/img-5.jpg"),
  require("../assets/media-content/imgs/img-6.jpg"),
];
export default {
  name: "Carousel",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      items: [
        {
          title: "Image 0 title",
          text:
            "Image 0 test Which might break up into separate lines When I do this",
          src: imgs[0],
        },
        {
          title: "Image 1 title",
          text:
            "Image 1 test Which might break up into separate lines When I do this",
          src: imgs[1],
        },
        {
          title: "Image 2 title",
          text:
            "Image 2 test Which might break up into separate lines When I do this",
          src: imgs[2],
        },
        {
          title: "Image 3 title",
          text:
            "Image 3 test Which might break up into separate lines When I do this",
          src: imgs[3],
        },
        {
          title: "Image 4 title",
          text:
            "Image 4 test Which might break up into separate lines When I do this",
          src: imgs[4],
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  height: 200px !important;
  position: relative !important;
}
.vertical-center {
  margin: 0 !important;
  position: absolute !important;
  top: 50% !important;
  -ms-transform: translateY(-50%) !important;
  transform: translateY(-50%) !important;
}
</style>