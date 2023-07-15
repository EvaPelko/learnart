<template>
  <v-container fill-height>
    <div id="div-color">
      <h1>Welcome to Gameart! </h1>
      <br><br>
      <h2>Pick a lounge:</h2>
      <br>
      <v-row align="center">
        <v-col cols="12">
          <div class="text-center">
            <v-row justify="center">
              <v-col cols="6">
                <div class="my-2">
                  <v-btn block height="200px" to="/teacherfeed" x-large color="#99CBDB" dark>
                    Learning Material
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="my-2">
                  <v-btn block height="200px" to="/studentfeed" x-large color="#99CBDB" dark>
                    Student Feed
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <br><br>
            <p>Featured teacher post</p>


            <v-img src="../assets/me-chibi-left.png" align="right" width="200"></v-img>
            <p>Join our vibrant community of like-minded individuals who share your passion for art!

              Connect with fellow learners, engage in lively discussions, and embark on collaborative projects that will
              challenge and expand your creative horizons!</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<style>
p {
  font-size: 20px;
}
</style>
<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'LandingPageView',

  components: {

  },
}
</script>
