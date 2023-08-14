<template>
  <v-container>
    <div id="div-color">
      <h1>Teacher Feed</h1>
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
    </div>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'TeacherFeedView',
  data() {
    return {
      error: [],
      name: null,
      password: null,
    }
  },
  methods: {
    login(e) {
      if (this.name && this.password) {
        console.log("login function called")
      }
      this.error = [];
      if (this.name) {
        this.error.push("name is required")
      }
      if (this.password) {
        this.error.push("password is required")
      }
      console.ward("errors", this.error)
      e.preventDefault();

    }
  },
  components: {

  },
}
</script>
