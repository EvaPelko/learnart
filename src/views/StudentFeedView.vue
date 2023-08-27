<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1>Student Feed</h1>
    <PostCard></PostCard>
  </v-container>
</template>

<script>
import store from '../store';
import PostCard from '../components/PostCard'
import { collection, getDocs, db, getFirestore } from "firebase/firestore";
export default {
  name: 'StudentFeedView',
  return: {
    store,
    cards: [],
  },
  components: {
    PostCard,
  },
  methods: {
    async getPosts() {
      alert('Dohvaćam');
      //let cards = [];
      //... API/Firebase -> sve kartice -> cards
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    },
  },
  mounted() {
    this.getPosts();
  }
}
</script>
