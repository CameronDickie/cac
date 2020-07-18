<template>
  <nav >
    <v-toolbar color="primary">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Climate Action Carleton</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat text large class="hidden-sm-and-down" href="/home">Home</v-btn>
      <v-btn flat text large class="hidden-sm-and-down" href="/about">About</v-btn>
      <v-btn flat text large class="hidden-sm-and-down" href="/divestment">Divestment</v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <p>Test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false
    };
  }
};
</script>