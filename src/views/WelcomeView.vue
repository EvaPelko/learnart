<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="stroke text-center">GAMEART</h1>
      </v-col>
    </v-row>

    <div id="div-color">

      <v-row align="center">
        <v-col cols="12">
          <div class="text-center">
            <v-row justify="center">
              <v-col cols="3">
                <div class="my-2">
                  <v-btn height="100px" width="300" to="/login" size="x-large" style="font-size: 30px" color="#99CBDB"
                    class="stroke">LOG IN</v-btn>
                </div>
                <v-col cols="3">
                  <v-img src="../assets/me-chibi-left.png" align="right" width="200"></v-img>
                </v-col>
              </v-col>

              <v-col cols="12">
                <div class="my-2">
                  <v-btn height="100px" width="300" to="/registration" size="x-large" style="font-size: 30px"
                    color="#99CBDB" class="stroke">SIGN UP</v-btn>
                </div>
              </v-col>
              <div class="d-flex justify-space-between">
                <p>So, you
                  <br>
                  want to learn art?
                </p>

              </div>
            </v-row>
          </div>
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
