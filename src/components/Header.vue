<template>
  <nav>
    <v-card style="margin:auto;">
      <v-app-bar prominent shrink-on-scroll app color="grey lighten-5">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-img
            class="d-inline-block"
            max-height="36"
            max-width="36"
            style="padding-right:20px"
            :src="logo"
            contain
          ></v-img>Climate Action Carleton
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat text large class="hidden-sm-and-down" href="/home">Home</v-btn>
        <v-btn flat text large class="hidden-sm-and-down" href="/about">About</v-btn>
        <v-btn flat text large class="hidden-sm-and-down" href="/contact">Contact</v-btn>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher="true" class="grey lighten-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Climate Action Carleton</v-list-item-title>
          <v-list-item-subtitle>
            <v-img
              class="d-inline-block"
              max-height="24"
              max-width="24"
              style="padding-right:10px"
              :src="logo"
              contain
            ></v-img>The Time is Now
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in links" :key="item" :href="item.url" link>
          <v-icon style="padding-right:10px">{{item.icon}}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- 
      <v-container grid-list>
        <v-col>
          <v-row justify="left" style="padding:10px;">
            <v-btn icon @click="drawer = !drawer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
            </v-btn>
          </v-row>
          <v-row align="center" justify="center" style="padding-bottom:10px;">
            <v-toolbar-title class="subheading">Climate Action Carleton</v-toolbar-title>
          </v-row>
          <v-row align="center" justify="center" style="padding-bottom:10px;">
            <v-btn flat text large href="/home">Home</v-btn>
          </v-row>
          <v-row align="center" justify="center" style="padding-bottom:10px;">
            <v-btn flat text large href="/about">About</v-btn>
          </v-row>
          <v-row align="center" justify="center" style="padding-bottom:10px;">
            <v-btn flat text large href="/divestment">Divestment</v-btn>
          </v-row>
        </v-col>
      </v-container>-->
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      logo: require("../assets/media-content/imgs/logo-cropped.png"),
      links: [
        {
          name: "HOME",
          icon: "mdi-home",
          url: "/home",
        },
        {
          name: "ABOUT",
          icon: "mdi-information",
          url: "/about",
        },
        // {
        //   name: "DIVESTMENT",
        //   icon: "mdi-calendar",
        //   url: "/divestment",
        // },
        {
          name: "CONTACT",
          icon: "mdi-account-circle",
          url: "/contact",
        },
      ],
    };
  },
};
</script>
<style scoped>
.title-docked {
  padding-left: 25px;
}
</style>