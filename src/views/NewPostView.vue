<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <h1 class="stroke">New Post</h1>
    </v-row>

    <v-row align="center" justify="center">
      <v-card>
        <div id="div-color" max-width="800px" style="padding: 20px">
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field v-model="newTitleText" label="Write a title" outlined dense class="post-input"
                @keyup.enter="postTitle" :rules="[rules.required]"></v-text-field>
              <v-textarea v-model="newPostText" label="Write text" outlined dense variant="filled"
                :rules="[rules.required, rules.maxLength]" counter rows="8" max-height="160px"></v-textarea>
            </v-form>

            <croppa :width="400" :height="400" v-model="imageReference"></croppa>


          </v-card-text>
          <v-card-actions class="card-actions">
            <v-btn type="button" @click="post" color="#99CBDB" dark>Post</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-row>


  </v-container>
</template>

<script>
import store from '../store';
import { auth, db, firebase } from "../firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
      imageUrl: 'path-to-your-image.jpg',
      isSmallScreen: false,
      newTitleText: '',
      newPostText: '',
      imageReference: null,
      valid: true,
      store,
      rules: {
        required: v => !!v || "This field is required",
        maxLength: v => (v && v.length <= 1000) || "Max 1000 characters",
      }
    };
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = this.$vuetify.breakpoint.smAndDown; // Adjust breakpoint as needed
    },
    post() {
      if (this.$refs.form.validate()) {
        this.imageReference.generateBlob((blobData) => {
          console.log(blobData);

          let imageName = 'posts/' + store.currentUser + "/" + Date.now() + ".png";
          console.log(imageName);

          const storage = getStorage();
          const storageRef = ref(storage, imageName);
          uploadBytes(storageRef, blobData)
            .then((snapshot) => {
              alert('Uploaded a blob or file!');
              getDownloadURL(ref(storage, imageName))
                .then((url) => {
                  const titleText = this.newTitleText;
                  const postText = this.newPostText;
                  const postDoc = {
                    url: url,
                    title: titleText,
                    text: postText,
                    posted_at: Date.now(),
                    email: store.currentUser,
                    userRole: store.profileType,
                  };

                  if (store.profileType === "Student") {
                    const studentPostsRef = collection(db, "student-posts");
                    addDoc(studentPostsRef, postDoc)
                      .then(() => {
                        alert('Post saved to student-posts collection');
                        this.newTitleText = "";
                        this.newPostText = "";
                        this.imageReference.remove();
                      })
                      .catch((error) => {
                        console.error(error);
                        alert('Error saving post: ' + error);
                      });
                  } else if (store.profileType === "Teacher") {
                    const teacherPostsRef = collection(db, "teacher-posts");
                    addDoc(teacherPostsRef, postDoc)
                      .then(() => {
                        alert('Post saved to teacher-posts collection');
                        this.newTitleText = "";
                        this.newPostText = "";
                        this.imageReference.remove();
                      })
                      .catch((error) => {
                        console.error(error);
                        alert('Error saving post: ' + error);
                      });
                  }
                })
                .catch(e => {
                  alert(e);
                });
            })
            .catch(e => {
              alert(e);
            });
        });
      }
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  resizeTextarea() {
    const textarea = this.$refs.textarea.$el.querySelector('textarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  },

};
</script>

