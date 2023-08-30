<template>
  <v-container>
    <br>
    <h2>My profile</h2>
    <br>
    <div id="div-color">



      <div class="d-flex flex-row bg-surface-variant">
        <v-sheet class="ma-2  transparent-sheet">
          <v-avatar class="ma-4" size="50">
            <v-img src="../assets/User.jpg"></v-img>
          </v-avatar>
        </v-sheet>
        <v-sheet class=" transparent-sheet">
          <p class="text-left mt-10">{{ email }}</p>
        </v-sheet>
        <v-sheet class="transparent-sheet mt-10 ml-7">
          <v-img src="../assets/check.svg" alt="Responsive Image" class="mx-auto" max-width="30px"></v-img>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 transparent-sheet">
          <p class="text-left mt-6" style="color: #216EE1">TEACHER</p>
        </v-sheet>
      </div>
      <p class="text-left roboto-font mx-10">Hello there! This is your profile!
      </p>
      <br>
    </div>
  </v-container>
</template>

<script>
import store from '../store';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

export default {
  name: 'MyProfileView',
  props: ['userEmail'],
  data() {
    return {
      store,
      post: null,
      email: store.currentUser,
    }
  },
  components: {

  },


}
</script>
