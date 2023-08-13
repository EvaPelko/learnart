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
              <v-col xs="3">
                <div class="my-2">
                  <v-btn to="/teacherfeed" color="#99CBDB" height="200px" class="stroke shrink-button"
                    style="font-size: 30px">
                    Learning
                    <br>
                    Material
                  </v-btn>
                </div>
              </v-col>
              <v-col xs="3">
                <div class="my-2">
                  <v-btn height="200px" to="/studentfeed" style="font-size: 30px" color="#99CBDB"
                    class="stroke shrink-button">
                    Student
                    <br>
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

                  <v-responsive class="ma-4">
                    <v-img src="../assets/hand-drawing.jpg" alt="Responsive Image" class="mx-auto" max-width="320px"
                      :class="{ 'shrink-img': isSmallScreen }"></v-img>
                  </v-responsive>

                </div>
                <div>
                  <br>
                  <v-card-title>How to draw a hand</v-card-title>
                  <v-card-text class="text-left roboto-font text-subtitle-1">
                    Drawing hands can be challenging, but with practice and some tips, you can improve your hand-drawing
                    skills. Here's a step-by-step guide to help you get started:

                    Study Hand Anatomy: Understanding the basic structure... <span style="color: #216EE1">Read
                      more</span>
                  </v-card-text>
                  <a href="/profile">
                    <v-avatar class="ma-1" size="50">
                      <v-img src="../assets/User.jpg"> </v-img>
                    </v-avatar>
                  </a>
                  <v-card-subtitle>Jane Smith</v-card-subtitle>
                </div>
              </div>
            </v-card>
            <br>
            <v-col md="12" xs="6">
              <div class="text-center">
                <v-row justify="center">
                  <v-col cols="3" xs="4">
                    <div class="my-2">
                      <v-img src="../assets/me-chibi-left.png" align="right" width="230"></v-img>
                    </div>
                  </v-col>
                  <v-col md="6" xs="2">
                    <div class="my-2">
                      <v-card class="font-xs shrink-card">
                        Join our vibrant community of like-minded individuals who share your passion for art!
                        <br><br>
                        Connect with fellow learners, engage in lively discussions, and embark on collaborative projects
                        that will
                        challenge and expand your creative horizons!
                      </v-card>

                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
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
  data() {
    return {
      imageUrl: 'path-to-your-image.jpg',
      isSmallScreen: false,
    };
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = this.$vuetify.breakpoint.smAndDown;
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  components: {

  },
}
</script>
