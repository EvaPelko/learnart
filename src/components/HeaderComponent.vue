<template>
  <v-app>


    <v-app-bar app height=90>
      <div class="d-flex align-center">

        <v-img alt="Šapica Logo" class="shrink mr-2" contain
          src="https://cdn.discordapp.com/attachments/437959128745377802/1104216262927716463/Untitled_Artwork.png"
          transition="scale-transition" width="60" />

        <v-img alt="Šapica Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="220"
          src="https://cdn.discordapp.com/attachments/437959128745377802/1103108311932473384/Untitled_Artwork.png"
          width="120" />
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
  </v-app>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>