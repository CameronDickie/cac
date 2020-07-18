<template>
  <div class="about mx-auto">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-4 font-weight-bold mb-3">ABOUT US</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <h2 class="display-1 font-weight-bold mb-6">Our Mission</h2>
      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >To advocate, raise awareness, and take action upon issues of the global climate crisis within and beyond the Carleton community in a manner that recognizes the urgent need for unprecedented and transformative approaches to these problems, all while meaningfully incorporating an intersectional approach through considerations of indigeneity, race, and gender.</v-responsive>

      <v-divider class="mx-auto mb-8"></v-divider>
      <h2 class="display-2 font-weight-bold mb-6">What is Climate Action Carleton?</h2>
      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >Founded in 2019, Climate Action Carleton is a student activist group based on the Carleton University campus that advocates for climate action and climate justice. We are an independent group run entirely by students.</v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >At Climate Action Carleton, we know that only clear, concrete, and transformative action is enough to tackle the global climate crisis. We understand that, because decades of incrementalism and stalling have delayed action and progress, we must act in an unprecedent, daring, and ambitious manner if we are going to have a shot at transforming our current situation.</v-responsive>
      <div></div>

      <v-divider class="mx-auto mb-8"></v-divider>
      <h2 class="display-0 font-weight-bold mb-6">Who Are We?</h2>

      <v-container class="my-5">
        <v-layout row wrap>
          <v-flex xs6 md3>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>
            <v-responsive>
              <h5>Generic White Guy</h5>
            </v-responsive>
          </v-flex>
          <v-flex xs6 md3>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img
                src="https://image.shutterstock.com/z/stock-photo-romantic-and-happy-asian-elder-senior-couple-laughing-while-sitting-on-sofa-at-home-1697790940.jpg"
              ></v-img>
            </v-avatar>
            <v-responsive>
              <h5>Generic Asian Couple</h5>
            </v-responsive>
          </v-flex>
          <v-flex xs6 md3>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img
                src="https://image.shutterstock.com/image-photo/group-senior-looking-camera-portrait-600w-521257594.jpg"
              ></v-img>
            </v-avatar>
            <v-responsive>
              <h5>Ellen Selfie Recreated</h5>
            </v-responsive>
          </v-flex>
          <v-flex xs6 md3>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img
                src="https://image.shutterstock.com/image-photo/senior-couple-relaxing-by-sea-600w-623697488.jpg"
              ></v-img>
            </v-avatar>
            <v-responsive>
              <h5>White Privilege</h5>
            </v-responsive>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container></v-container>
      <!-- GRID OF PEOPLE RELATED TO CAC -->

      <v-divider class="mx-auto mb-8"></v-divider>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >Both on and off the Carleton campus, Climate Action Carleton lobbies those who have the power to make impactful climate-related decisions that are essential for the future of Carleton’s students and the welfare of our community, country, and of our world.</v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >On campus, we work to hold executive actors at Carleton University including the Board of Governors, the President and the Chancellor, as well as CUSA, our student union, accountable for their actions or their inactions. Off-campus, our lobbying efforts and campaigns are dedicated towards all levels of government, relevant corporations and businesspeople, civil society actors, and other groups in our community. Click here to read more about our lobbying strategies and policies.</v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >Further to our lobbying efforts, Climate Action Carleton also works to raises awareness and understanding on issues of climate change and climate justice in Ottawa, in Canada, and around the world. We do this by organizing educational events about the climate crisis that focus on climate change, the intersectionality of the crisis, and climate justice.</v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >As a group of young people, we pride ourselves on our ability to think and act ‘outside of the box’ in original and innovative ways. However, we realize that we cannot of course know everything there is to know about the climate crisis. As a result, we are committed to staying open-minded to new and innovate perspectives on the climate crisis – especially those that provide insights into how the climate movement can better-address the vulnerability, inequality, and marginalization posed by the crisis. If anyone has input for us about the operations of Climate Action Carleton, we encourage them to reach out to us to spark a constructive discussion about any given issue.</v-responsive>
    </v-container>

    <div class="py-12"></div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item,i) in 5" :key="i">
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
