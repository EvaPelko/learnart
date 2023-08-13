<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="stroke text-center">GAMEART</h1>
      </v-col>
    </v-row>

    <div id="div-color">
      <v-row justify="space-between" align="center">
        <v-col cols="4">
          <!-- LOG IN button -->
          <v-btn height="100px" width="250" to="/login" size="x-large" style="font-size: 30px" color="#99CBDB"
            class="stroke ma-10 pixel-game-button">LOG IN</v-btn>

          <!-- SIGN UP button -->
          <v-btn height="100px" width="250" to="/registration" size="x-large" style="font-size: 30px" color="#99CBDB"
            class="stroke ma-10">SIGN UP</v-btn>
        </v-col>

        <v-col cols="4">
          <v-card class="font-xs shrink-card ma-10" height="100">So, you
            <br>
            want to learn art?
          </v-card>
        </v-col>
        <v-col cols="4" rows="2">
          <v-img src="../assets/me-chibi-left.png" align="right" width="250"></v-img>
        </v-col>
      </v-row>
    </div>

    <a href="/landing">continue as guest</a>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'WelcomeView',

  components: {

  },
}
</script>
