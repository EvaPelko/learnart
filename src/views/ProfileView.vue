<template>
  <v-container>
    <br>
    <h2>User profile</h2>
    <br>
    <div id="div-color">
      <v-col cols="12">

      </v-col>
      <div class="d-flex flex-row mb-6 bg-surface-variant">
        <v-sheet class="ma-2 pa-2 transparent-sheet"><a href="/profile">
            <v-avatar class="ma-4" size="50">
              <v-img src="../assets/User.jpg"></v-img>
            </v-avatar>
          </a></v-sheet>
        <v-sheet class=" transparent-sheet">
          <p class="text-left mt-10">Jane Smith</p>
        </v-sheet>
        <v-sheet class="transparent-sheet mt-10 ml-7">
          <v-img src="../assets/check.svg" alt="Responsive Image" class="mx-auto" max-width="30px"></v-img>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 transparent-sheet">
          <p class="text-left mt-6" style="color: #216EE1">TEACHER</p>
        </v-sheet>
      </div>
      <p class="text-left roboto-font mx-10">Hello there! I'm an art teacher, and I couldn't be more thrilled to share my
        passion for creativity and artistic expression with my students. With a paintbrush in one hand and a heart full of
        inspiration, I guide aspiring artists on a journey of self-discovery and artistic growth.
        <br><br>
        I attended the prestigious Art Academy of Creative Expression, renowned for its innovative approach to art
        education. It was at this esteemed institution that I honed my artistic skills and developed a deep appreciation
        for various artistic disciplines.
      </p>
    </div>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'ProfileView',

  components: {

  },
}
</script>
