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
        <v-img src="../assets/hand-drawing.jpg" contain></v-img>
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
        <v-textarea v-model="commentText" label="Write a comment..." outlined dense class="comment-input mx-15"
          :rules="rules" counter @keyup.enter="postComment" rows="2"></v-textarea>
        <v-spacer></v-spacer>
        <v-btn @click="postComment" color="#99CBDB" dark class="mx-15">Post</v-btn>
      </div>
    </div>
    <div style="background-color: #EBE2B4; padding: 10px">
      <div class="d-flex flex-row bg-surface-variant">
        <v-sheet class=" transparent-sheet"><a href="/profile">
            <v-avatar class="ma-4" size="50">
              <v-img src="../assets/User.jpg"></v-img>
            </v-avatar>
          </a></v-sheet>
        <v-sheet class=" transparent-sheet">
          <p class="text-left mt-6">Holly543</p>
        </v-sheet>

      </div>
      <p class="text-left roboto-font mx-15">Wow, thank you so much for your guidance on learning to draw hands! Your
        advice really helped me improve my
        skills. I never thought I could capture the intricacies of hands until I followed your tips. Your encouragement to
        observe and practice different hand positions made all the difference. Now, I feel more confident and excited to
        tackle other challenging subjects in my artwork. You're an amazing art teacher!</p>
    </div>
  </v-container>
</template>

<script>
import { getFirestore, doc, getDoc } from 'firebase/firestore';


export default {
  name: 'PostView',
  props: ['postId'],
  data() {
    return {
      commentText: '',
      isLiked: false,
      saveDialog: false,
      reportDialog: false,
      imageUrl: '../assets/hand-drawing.jpg',
      dialog: false,
      post: null,
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
  },
  methods: {
    postComment() {
      if (this.commentText.trim() !== '') {
        // Perform the logic to post the comment here
        console.log('Posting comment:', this.commentText);

        // Clear the input field after posting
        this.commentText = '';
      }
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
  components: {
    // Your components here
  },
};

</script>
