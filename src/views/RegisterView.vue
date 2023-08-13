<template>
    <v-container fill-height fluid class="background">

        <v-row align="center" justify="center">
            <h1 class="stroke">GAMEART</h1>
            <v-col align="center" justify="center" cols="12">
                <v-card class="card-border" width="600px" outlined color="#FFF7D0">
                    <v-card-title align="left">REGISTER</v-card-title>
                    <v-card-subtitle align="left">
                        Dear artist, please register
                    </v-card-subtitle>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field v-model="firstName" dense label="Name" clearble type="text" outlined
                                :rules="[rules.required]"></v-text-field>
                            <v-text-field v-model="lastName" dense label="Last Name" clearble type="text" outlined
                                :rules="[rules.required]"></v-text-field>
                            <v-text-field v-model="email" dense label="Email" clearble type="text"
                                :rules="[rules.required, rules.email]" outlined></v-text-field>
                            <v-text-field v-model="password" dense label="Password" clearble :append-icon="showIcon ? 'mdi-eye' : 'mdi-eye-off'
                                " @click:append="togglePasswordVisibility" :rules="[rules.required, rules.min]"
                                :type="showIcon ? 'text' : 'password'" outlined></v-text-field>
                            <v-select label="Select Level of Experience"
                                :items="['Beginner', 'Intermediate', 'Advanced', 'Professional']" variant="outlined"
                                :rules="[rules.required]"></v-select>
                            <v-checkbox v-model="isTeacher" label="I want to be a teacher"></v-checkbox>
                            <v-dialog v-model="uploadDialog" max-width="500">
                                <v-card>
                                    <v-card-title>Upload your drawings as evaluation</v-card-title>
                                    <v-card-text>
                                        <!-- Your content here, such as image upload components -->
                                        <v-file-input label="Upload Images" :rules="[rules.required]"></v-file-input>
                                        <v-file-input label="Upload Images"></v-file-input>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn @click="uploadDialog = false">Cancel</v-btn>
                                        <v-btn @click="uploadPictures">Upload</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="card-actions">
                        <v-btn class="btn-right-margin" @click="clearFormData" color="red darken-3" outlined>
                            CLEAR
                        </v-btn>
                        <v-btn :disabled="isButtonDisabled" outlined @click="registerUser">
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {
    doc,
    auth,
    db,
    setDoc,
    createUserWithEmailAndPassword,
} from "../../firebase.js";
export default {
    name: "RegistrationView",
    components: {},
    watch: {
        valid: function (isValid) {
            this.isButtonDisabled = isValid != true;
        },
    },
    data() {
        return {
            isButtonDisabled: false,
            valid: true,
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            showIcon: false,
            isTeacher: false,
            uploadDialog: false,

            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v?.length >= 6 || "Min 6 characters",
                email: (v) =>
                    !v ||
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "E-mail must be valid",
            },
        };
    },
    watch: {
        isTeacher(newValue) {
            if (newValue) {
                this.uploadDialog = true;
            } else {
                this.uploadDialog = false;
            }
        }
    },


    created() { },
    mounted() { },
    destroyed() { },
    methods: {
        clearFormData() {
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.password = null;
        },
        postActionMoveToView() {
            this.$router.push({ path: "/animals" });
        },
        async saveAdditionalData(user, email, firstName, lastName) {
            await setDoc(doc(db, "users", email), {
                Email: email,
                FirstName: firstName,
                LastName: lastName,
                AuthorisationType: "USER",
            });
        },
        registerUser() {
            debugger;
            const email = this.email;
            const password = this.password;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    debugger;
                    // Signed in
                    const user = userCredential.user;
                    const firstName = this.firstName;
                    const lastName = this.lastName;
                    this.saveAdditionalData(user, email, firstName, lastName);
                    this.postActionMoveToView();
                })
                .catch((error) => {
                    debugger;
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error, errorCode, errorMessage);
                });
        },
        togglePasswordVisibility() {
            this.showIcon = !this.showIcon;
        },
        uploadPictures() {
            // Handle the upload logic here
            // You can use this method to process the uploaded pictures
            // If the upload is canceled, set isTeacher to false
            this.isTeacher = false;
            // and close the dialog afterward
            this.uploadDialog = false;
        },
    },
};
</script>

<style>
.card-border {
    padding: 2%;
}

.card-text-border {
    padding: 2.5%;
}

.card-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.btn-right-margin {
    margin-right: 2%;
}
</style>
