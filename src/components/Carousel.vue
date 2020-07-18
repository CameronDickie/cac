<template>
  <v-carousel
    cycle
    height="60vh"
    interval="8000"
    hide-delimiter-background
    show-arrows-on-hover
    touch
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <div align-center>
        <v-container class="text-h4">
          <div class="d-inline-flex primary">
            <p>This is a test with text</p>
          </div>
          <br />
          <div class="d-inline-flex primary">
            <p>Hopefully this creates multiple lines of text</p>
          </div>
          <br />
          <div class="d-inline-flex primary">
            <p>That I can work with to cover a background</p>
          </div>
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
  require("../assets/media-content/imgs/img-6.jpg")
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
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      items: [
        {
          src: imgs[0]
        },
        {
          src: imgs[1]
        },
        {
          src: imgs[2]
        },
        {
          src: imgs[3]
        },
        {
          src: imgs[4]
        }
      ]
    };
  }
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