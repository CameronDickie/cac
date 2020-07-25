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
      <v-container grid-list>
        <v-layout row wrap>
          <v-flex xs12>
            <v-toolbar-title class="title-docked">Climate Action Carleton</v-toolbar-title>
          </v-flex>
          <v-flex xs12>
            <v-btn flat text large href="/home">Home</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn flat text large href="/about">About</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn flat text large href="/divestment">Divestment</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      
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
<style scoped>
.title-docked {
  padding-left: 25px;
}
</style>