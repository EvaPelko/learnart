<template>
  <v-container>
    <br>
    <h2>How to draw a hand</h2>
    <br>
    <div id="div-color">
      <div class="d-flex flex-row bg-surface-variant">
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

      <p class="text-left roboto-font mx-10">Drawing hands can be challenging, but with practice and some tips, you can
        improve your
        hand-drawing skills.
        Here's a step-by-step guide to help you get started:
        <br>
        Study Hand Anatomy: Understanding the basic structure of the hand is crucial. Pay attention to the proportions,
        bone structure, joints, and the position of tendons and muscles.
        <br>
        Gesture Drawing: Start with loose and quick gesture drawings. Capture the overall shape and pose of the hand
        without worrying about details. This helps you establish the foundation of the hand's position and gesture.
        <br>
        Basic Shapes: Simplify the hand into basic shapes. The palm can be represented as a rectangle or a square, and the
        fingers as cylinders or wedges.
        <br>
        Proportions: The hand's length is roughly the same as the length of the face from the hairline to the chin. The
        fingers are usually about three-quarters the length of the palm.
        <br>
        Thumb Placement: The thumb is usually positioned lower on the palm and slightly apart from the other fingers. It
        can be helpful to think of the thumb as a separate shape from the rest of the hand.
        <br>
        Joint Locations: Pay attention to the knuckles and other joint locations, as they significantly impact the hand's
        appearance in various poses.
        <br>
        Contour and Details: Once you have the basic shapes and proportions, start refining the contour and adding details
        like wrinkles, nails, and skin texture. Observe your own hand or use references to make it more realistic.
        <br>
        Light and Shadow: Understanding light and shadow is crucial for adding depth and dimension to your drawing.
        Observe how light falls on your hand or reference photos to replicate the shadows accurately.
        <br>
        Practice Regularly: Drawing hands can be challenging, so don't get discouraged if your early attempts don't meet
        your expectations. Keep practicing regularly, and you'll see improvement over time.
        <br>
        Use References: Use photos or your hand as a reference when practicing. This helps you better understand the form
        and details of the hand.
        <br>
        Experiment with Poses: Draw hands in various poses and angles. Practice drawing both relaxed and dynamic hand
        gestures to improve your overall skill.
        <br>
        Be Patient: Drawing hands requires patience and persistence. Don't rush the process, and allow yourself to make
        mistakes as they are an essential part of learning.
        <br>
        Remember, drawing is an art, and there's no single "right" way to do it. Develop your style and keep practicing to
        improve your hand-drawing skills.
      </p>
    </div>
    <div class="icon-container">
      <v-img src="../assets/like.svg" alt="Like button" class="mx-2 like-icon" :class="{ liked: isLiked }"
        max-width="50px" onclick="toggleLike"></v-img>
      <div class="icons-right">
        <v-img src="../assets/report.svg" alt="Report button" class="mx-auto" max-width="40px"></v-img>
        <v-img src="../assets/save.svg" alt="Save button" class="mx-auto" max-width="28px"></v-img>
      </div>
    </div>
    <div id="div-color">
      <p>Comments</p>
      <div class="comment-container">
        <v-text-field v-model="commentText" label="Write a comment..." outlined dense class="comment-input mx-15"
          @keyup.enter="postComment"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn @click="postComment" color="#99CBDB" dark class="mx-15">Post</v-btn>
      </div>
    </div>
    <div style="background-color: #EBE2B4;">
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
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'PostView',
  data() {
    return {
      commentText: '',
      isLiked: false,
    };
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
    }
  },
  components: {
    // Your components here
  },
};

</script>
