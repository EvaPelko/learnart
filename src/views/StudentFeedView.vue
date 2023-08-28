<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1>Student Feed</h1>
    <PostCard v-for="url in cards" :key="url" :info="cards" />
  </v-container>
</template>

<script>
import store from '../store';
import PostCard from '../components/PostCard'
import { collection, getDocs, db, getFirestore } from "firebase/firestore";
export default {
  name: 'StudentFeedView',
  data() {
    return {
      store,
      cards: [
        "https://picsum.photos/id/1/400/400",
        "https://picsum.photos/id/2/400/400",
        "https://picsum.photos/id/3/400/400"
      ],
    };
  },
  components: {
    PostCard,
  },
  methods: {
    async getPosts() {
      let cards = [];
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        let cards = {
          id: doc.id,
          time: data.posted_at,
          email: data.email,
          title: data.title,
          text: data.text,
        }
      });
    },
  },
  mounted() {
    this.getPosts();
  }
}
</script>
