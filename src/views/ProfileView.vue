<template>
  <v-container>
    <br>
    <h2>User profile</h2>
    <br>
    <div id="div-color">



      <div class="d-flex flex-row bg-surface-variant">
        <v-sheet class="ma-2  transparent-sheet"><a href="/profile">
            <v-avatar class="ma-4" size="50">
              <v-img src="../assets/User.jpg"></v-img>
            </v-avatar>
          </a></v-sheet>
        <v-sheet class=" transparent-sheet">
          <p class="text-left mt-10">{{ $route.params.userEmail }}</p>
        </v-sheet>
        <v-sheet class="transparent-sheet mt-10 ml-7">
          <v-img src="../assets/check.svg" alt="Responsive Image" class="mx-auto" max-width="30px"></v-img>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 transparent-sheet">
          <p class="text-left mt-6" style="color: #216EE1">TEACHER</p>
        </v-sheet>
      </div>
      <p class="text-left roboto-font mx-10">Hello there! My email is {{ userEmail }}. I'm new!
      </p>
      <br>
    </div>
  </v-container>
</template>

<script>

import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

export default {
  name: 'ProfileView',
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
  async mounted() {
    console.log('userEmail prop:', this.userEmail);
    await this.fetchUserData(this.userEmail);
  },
  methods: {
    async fetchPostData(userEmail) {
      try {
        const db = getFirestore()
        const usersCollection = collection(db, 'users'); // Replace 'users' with your collection name
        const q = query(usersCollection, where('email', '==', userEmail));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Assuming there's only one user with a given email
          const userDoc = querySnapshot.docs[0];
          console.log("Document data:", userDoc.data());
          this.post = userDoc.data();
        } else {
          console.log("No user with such email found.");
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    },
  }
}
</script>
