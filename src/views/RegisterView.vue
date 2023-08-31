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
                            <v-select label="Select Level of Experience" v-model="experience"
                                :items="['Beginner', 'Intermediate', 'Advanced', 'Professional']" variant="outlined"
                                :rules="[rules.required]"></v-select>
                            <div class="form-group">
                                <label for="profileType">Are you a teacher or a student? </label>
                                <select v-model="chosenProfileType" id="profileType" class="form-control form-control-lg">
                                    <option v-for="profileTypeOption in profileType" :key="profileTypeOption">{{
                                        profileTypeOption }}</option>
                                </select>
                            </div>
                            <!--  <v-dialog v-model="uploadDialog" max-width="500">
                                <v-card>
                                    <v-card-title>Upload your drawings as evaluation</v-card-title>
                                    <v-card-text>
                                        
                                        <v-file-input label="Upload Images" :rules="[rules.required]"></v-file-input>
                                        <v-file-input label="Upload Images"></v-file-input>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn @click="uploadDialog = false">Cancel</v-btn>
                                        <v-btn @click="uploadPictures">Upload</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog> -->
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="card-actions">
                        <v-btn class="btn-right-margin" @click="clearFormData" color="red darken-3" outlined>
                            CLEAR
                        </v-btn>
                        <v-btn :disabled="isButtonDisabled" outlined type="button" @click="registerUser">
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { auth, db, firebase, createUserWithEmailAndPassword } from "../firebase";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            experience: '',
            showIcon: false,
            isTeacher: false,
            uploadDialog: false,
            chosenProfileType: "Student",
            profileType: ["Teacher",
                "Student"],

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


    created() { },
    mounted() { },
    destroyed() { },
    methods: {
        clearFormData() {
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.password = null;
            this.experience = null;
            this.isTeacher = null;
            this.profileType = null;

        },
        async saveAdditionalData(user, email, firstName, lastName, profileType) {
            try {
                await setDoc(doc(db, "users", email), {
                    Email: email,
                    FirstName: firstName,
                    LastName: lastName,
                    AuthorisationType: "USER",
                    ProfileType: profileType,
                })
                console.log("User data saved:", userData);

            } catch (error) {
                console.error("Error saving user data:", error);
            }
        },
        async registerUser() {
            console.log({ email: this.email })

            const email = this.email;
            const password = this.password;
            const firstName = this.firstName;
            const lastName = this.lastName;
            const profileType = this.chosenProfileType;
            console.log(profileType);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Create a user document in Firestore
                const db = getFirestore();
                const userDocRef = doc(db, "users", email);
                await setDoc(userDocRef, {
                    Email: email,
                    FirstName: firstName,
                    LastName: lastName,
                    AuthorisationType: "USER",
                    ProfileType: profileType,
                });
                alert('Account successfully made! Welcome ' + this.firstName + '!');
                // Call the clearFormData method to reset the form
                this.clearFormData();

            } catch (error) {
                console.error(error);
                this.errorMessage = error.message;
            }
        },
        togglePasswordVisibility() {
            this.showIcon = !this.showIcon;
        }
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
