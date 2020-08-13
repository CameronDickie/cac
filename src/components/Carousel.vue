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
        <!-- <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover? 5:2"></v-card>
        </v-hover>-->

        <v-container>
          <v-row>
            <v-col xs3></v-col>
            <v-col xs9>
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :href="item.url"
                  :color="hover?'primary':'grey lighten-5'"
                  :class="hover?'white--text text-h4 text-decoration-underline text-center':'black--text text-h4 text-center'"
                  style="padding:5px"
                >{{item.title}}</v-card>
              </v-hover>
            </v-col>
            <v-col xs3></v-col>
          </v-row>
          <v-row>
            <v-col xs3></v-col>
            <v-col xs9>
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :href="item.url"
                  :color="hover?'primary':'grey lighten-5'"
                  :class="hover?'white--text text-body text-decoration-underline text-center':'black--text text-body text-center'"
                  style="padding:5px"
                >{{item.text}}</v-card>
              </v-hover>
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
  require("../assets/media-content/imgs/environmental-racism.jpg"),
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
          title: "Environmental Racism - Outlined",
          text: "See our post about Environmental Racism on Instagram",
          src: imgs[0],
          url: "https://www.instagram.com/p/CBjZ-Een8eS/",
        },
        {
          title: "Image 1 title",
          text:
            "Image 1 test Which might break up into separate lines When I do this",
          src: imgs[1],
          url: "",
        },
        {
          title: "Image 2 title",
          text:
            "Image 2 test Which might break up into separate lines When I do this",
          src: imgs[2],
          url: "",
        },
        {
          title: "Image 3 title",
          text:
            "Image 3 test Which might break up into separate lines When I do this",
          src: imgs[3],
          url: "",
        },
        {
          title: "Image 4 title",
          text:
            "Image 4 test Which might break up into separate lines When I do this",
          src: imgs[4],
          url: "",
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