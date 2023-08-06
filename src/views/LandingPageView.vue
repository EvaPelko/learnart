<template>
  <v-container fill-height>
    <br>
    <h1 class="stroke">Welcome to Gameart! </h1>
    <br>
    <div id="div-color">
      <br>
      <h2>Pick a lounge:</h2>
      <br>
      <v-row align="center">
        <v-col cols="12">
          <div class="text-center">
            <v-row justify="center">
              <v-col cols="6">
                <div class="my-2">
                  <v-btn height="200px" width="450" to="/teacherfeed" size="x-large" style="font-size: 30px"
                    color="#99CBDB" class="stroke">
                    Learning
                    <br>
                    Material
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="my-2">
                  <v-btn height="200px" width="450" to="/studentfeed" size="x-large" style="font-size: 30px"
                    color="#99CBDB" class="stroke">
                    Student

                    Feed
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <br><br>
            <p>Featured teacher post</p>

            <v-card :to="'/post'" exact tile height="350px" max-width="800" color="#EBE2B4" class="mx-auto my-12">
              <div class="d-flex">
                <div>
                  <v-avatar class="ma-4" size="320" rounded="0">
                    <v-img class="responsive-image" src="../assets/hand-drawing.jpg"> </v-img>
                  </v-avatar>

                </div>
                <div>
                  <br>
                  <v-card-title>How to draw a hand</v-card-title>
                  <v-card-text class="text-left roboto-font text-h5">
                    Drawing hands can be challenging, but with practice and some tips, you can improve your hand-drawing
                    skills. Here's a step-by-step guide to help you get started:

                    Study Hand Anatomy: Understanding the basic structure... <span style="color: #2A26FF">Read
                      more</span>
                  </v-card-text>

                  <v-avatar class="ma-1" size="50">
                    <v-img src="../assets/User.jpg"> </v-img>
                  </v-avatar>
                  <v-card-subtitle>Jane Smith</v-card-subtitle>
                </div>
              </div>
            </v-card>
            <br>
            <div class="d-flex justify-space-between">
              <v-img src="../assets/me-chibi-left.png" align="right" width="200"></v-img>

              <p>
                Join our vibrant community of like-minded individuals who share your passion for art!
                <br><br>
                Connect with fellow learners, engage in lively discussions, and embark on collaborative projects that will
                challenge and expand your creative horizons!
              </p>
            </div>
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
