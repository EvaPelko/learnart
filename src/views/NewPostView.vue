<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <h1 class="stroke">New Post</h1>
    </v-row>

    <v-row align="center" justify="center">
      <v-card>
        <div id="div-color" max-width="800px" style="padding: 20px">
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field v-model="newTitleText" label="Write a title" outlined dense class="post-input"
                @keyup.enter="postTitle"></v-text-field>
              <v-text-field v-model="newPostText" label="Write text" outlined dense auto-grow name="input-7-1"
                variant="filled" :rules="rules" :model-value="value" counter @keyup.enter="postText"></v-text-field>
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
      rules: [v => v.length <= 25 || 'Max 5000 characters'],

    };
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = this.$vuetify.breakpoint.smAndDown; // Adjust breakpoint as needed
    },
    post() {
      this.imageReference.generateBlob((blobData) => {
        console.log(blobData);

        let imageName = 'posts/' + store.currentUser + "/" + Date.now() + ".png";
        console.log(imageName);

        const storage = getStorage();
        const storageRef = ref(storage, imageName);
        uploadBytes(storageRef, blobData).then((snapshot) => {
          alert('Uploaded a blob or file!');
          getDownloadURL(ref(storage, imageName))
            .then((url) => {
              console.log("Javni link", url);
            })
        }).catch(e => {
          alert(e);
        });

      });
      const titleText = this.newTitleText;
      const postText = this.newPostText;

      const docRef = addDoc(collection(db, "posts"), {
        title: titleText,
        text: postText,
        posted_at: Date.now(),
        email: store.currentUser,
      }).then(() => {
        console.log("Spremljen dokument ", doc);
        alert('Spremljen dokument');
        this.newTitleText = "";
        this.newPostText = "";
      }
      )
        .catch((e) => {
          console.error(e);
          alert(e);
        }
        );

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
