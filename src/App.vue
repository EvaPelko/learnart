<template>
  <v-app>
    <v-app-bar flat max-height="65">
      <v-app-bar app height=90>
        <div class="d-flex align-center">

          <v-img alt="Gameart Logo" class="shrink mr-2" contain
            src="https://cdn-icons-png.flaticon.com/512/7595/7595464.png" transition="scale-transition" width="60" />

          <v-app-bar-title>GAMEART</v-app-bar-title>
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
        <v-card-text class="pt-0">Uči crtati</v-card-text>
        <v-divider color="yellow"></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Learnart</strong>
        </v-card-text>
      </v-card>

    </v-content>
  </v-app>
</template>

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
