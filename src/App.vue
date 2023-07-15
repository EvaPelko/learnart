<template>
  <v-app>
    <v-app-bar flat max-height="65" class="purple-lighten-3" background="#FFF7D0">
      <v-app-bar app height=90>
        <div class="d-flex align-center">

          <a href="/landing"><v-img alt="Gameart Logo" class="shrink mr-2" contain
              src="https://www.nicepng.com/png/full/171-1710349_game-controller-pixel-game-controller.png"
              transition="scale-transition" width="60" />
          </a>
          <v-app-bar-title class="text-no-wrap">GAMEART</v-app-bar-title>
        </div>
        <v-spacer></v-spacer>
        <v-btn text to="/landing">Landing</v-btn>
        <v-btn v-show="isAuthenticated" text to="/animal">New Animal</v-btn>
        <v-btn v-show="false && isAuthenticated" text to="/profile">
          Profile
        </v-btn>
        <v-btn v-show="!isAuthenticated" text to="/login">Login</v-btn>
        <v-btn v-show="!isAuthenticated" text to="/registration">
          Registration
        </v-btn>
        <v-btn v-show="isAuthenticated" @click="signOut" text>Logout</v-btn>

        <v-spacer></v-spacer>

      </v-app-bar>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-content>


      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>

        </v-card-text>
        <v-card-text class="pt-0">Learn to art</v-card-text>
        <v-divider color="yellow"></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Learnart</strong>
        </v-card-text>
      </v-card>

    </v-content>
  </v-app>
</template>
<style>
.v-app-bar-title__content {
  width: 300px !important;
  font-size: 1.5em;
}
</style>
<style scoped>
.v-application {
  background-color: #99CBDB;
}

v-container {
  color: #FFF7D0;
}
</style>
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  },
  data: () => ({
    //
  }),
};
</script>
