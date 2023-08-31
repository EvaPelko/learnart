<template>
  <v-container>
    <br>
    <h2 class="stroke">{{ post.title }}</h2>
    <br>
    <div id="div-color">
      <div class="d-flex flex-row bg-surface-variant">
        <v-sheet class="ma-2 pa-2 transparent-sheet"><router-link
            :to="{ name: 'profile-view', params: { userEmail: post.email } }">
            <v-avatar class="ma-4" size="50">
              <v-img src="../assets/User.jpg"></v-img>
            </v-avatar>
          </router-link></v-sheet>
        <v-sheet class=" transparent-sheet">
          <p class="text-left mt-10">{{ post.email }}</p>
        </v-sheet>
        <v-sheet class="transparent-sheet mt-10 ml-7">
          <v-img src="../assets/check.svg" alt="Responsive Image" class="mx-auto" max-width="30px"></v-img>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 transparent-sheet">
          <p class="text-left mt-6" style="color: #216EE1">TEACHER</p>
        </v-sheet>
      </div>

      <p class="text-left roboto-font mx-10">{{ post.text }}
      </p>
      <v-img :src="post.url" alt="Responsive Image" class="mx-auto" max-width="320px" @click="showFullSize"></v-img>
      <v-dialog v-model="dialog" max-width="800px">
        <v-img :src="post.url" contain></v-img>
      </v-dialog>
      <br>
    </div>
    <div class="icon-container">
      <v-img src="../assets/like.svg" alt="Like Icon" class="mx-2 like-icon" :class="{ liked: isLiked }" max-width="50px"
        @click="toggleLike"></v-img>
      <div class="icons-right">
        <v-img src="../assets/report.svg" alt="Report button" class="mx-auto" max-width="40px"
          @click="showReportMessage"></v-img>
        <v-dialog v-model="reportDialog" max-width="300">
          <v-card>
            <v-card-title class="headline">Post Reported</v-card-title>
            <v-card-actions>
              <v-btn color="primary" text @click="reportDialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-img src="../assets/save.svg" alt="Save button" class="mx-auto" max-width="28px"
          @click="showSaveMessage"></v-img>
        <v-dialog v-model="saveDialog" max-width="300">
          <v-card>
            <v-card-title class="headline">Post Saved</v-card-title>
            <v-card-actions>
              <v-btn color="primary" text @click="saveDialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div id="div-color" style="padding: 10px">
      <p>Comments</p>
      <div class="comment-container">
        <v-textarea v-model="newCommentText" label="Write a comment..." outlined dense class="comment-input mx-15"
          :rules="rules" counter @keyup.enter="postComment" rows="2"></v-textarea>
        <v-spacer></v-spacer>
        <v-btn @click="postComment" color="#99CBDB" dark class="mx-15">Post</v-btn>
      </div>
    </div>
    <CommentCard v-for="card in cards" :key="card.id" :info="card" />
  </v-container>
</template>

<script>
import store from '../store';
import { db, firebase } from "../firebase";
import { getFirestore, doc, getDoc, addDoc, ref, collection, getDocs } from 'firebase/firestore';
import CommentCard from '../components/CommentCard'


export default {
  name: 'PostView',
  components: {
    CommentCard,
  },
  props: ['postId'],
  data() {
    return {
      newCommentText: '',
      isLiked: false,
      saveDialog: false,
      reportDialog: false,
      imageUrl: '../assets/hand-drawing.jpg',
      dialog: false,
      post: null,
      cards: [],
      rules: [v => v.length <= 700 || 'Max 700 characters'],
    };
  },
  computed: {
    selectedPost() {
      return this.posts.find(post => post.id === this.postId);
    },
  },
  async mounted() {
    await this.fetchPostData(this.postId);
    this.getComments();
  },

  methods: {
    async postComment() {
      if (this.newCommentText.trim() !== '') {
        console.log('Posting comment:', this.newCommentText);

        const commentText = this.newCommentText;

        try {
          const db = getFirestore();
          const postRef = doc(db, "posts", this.postId);
          const docSnap = await getDoc(postRef);

          if (docSnap.exists()) {
            const postId = docSnap.id; // Fetch the post ID from the document snapshot
            const docRef = await addDoc(collection(db, "comments"), {
              text: commentText,
              posted_at: Date.now(),
              email: store.currentUser,
              postId: postId, // Use the fetched post ID
            });

            console.log("Comment posted ", docRef);
            alert('Comment posted');
            this.newCommentText = '';
            location.reload();
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error(error);
          alert(error);
        }
      }

    },
    async getComments() {
      const cards = [];
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, "comments"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        if (data.postId === this.postId) {
          const card = {
            id: doc.id,
            text: data.text,
            email: data.email,
            time: data.posted_at,
          };
          cards.push(card);
        }
      });

      // Sort the cards array by time property in descending order
      cards.sort((a, b) => b.time - a.time);

      this.cards = cards;
    },
    toggleLike() {
      this.isLiked = !this.isLiked;
    },
    showSaveMessage() {
      this.saveDialog = true;
      setTimeout(() => {
        this.saveDialog = false;
      }, 1000);
    },
    showReportMessage() {
      this.reportDialog = true;
      setTimeout(() => {
        this.reportDialog = false;
      }, 1000);
    },
    showFullSize() {
      this.dialog = true;
    },
    async fetchPostData(postId) {
      try {
        const db = getFirestore()
        const postRef = doc(db, "posts", postId);
        // Fetch the document
        const docSnap = await getDoc(postRef);

        if (docSnap.exists()) {
          // Document exists, do something with the data
          console.log("Document data:", docSnap.data());
          this.post = docSnap.data();
        } else {
          // Document does not exist
          console.log("No such document!");
        }
      } catch (error) {
        console.error('Error fetching post data: ', error)
      }
    },
  },

};

</script>
