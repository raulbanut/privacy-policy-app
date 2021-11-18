import firebase from "firebase";
import { db } from "../../main";
import store from "../../store";

import Editor from 'primevue/editor';

/* eslint-disable */

export default {
    name: "Home",

    data() {
        return {
            statusTemplate: false,

            template: "",
            value: "",
            content: "",

            // customToolbar: [
            //     ['bold','italic','underline'],
            //     [{ 'list': 'ordered'}, {'list': 'bullet'}]
            // ]
        };
    },

    mounted() {
        const db = firebase.firestore();

        db.collection("template")
            .get()
            .then((snap) => {
                const mesaj = "";
                snap.forEach((doc) => {
                    this.template = doc.data().message;
                })
            });

        db.collection("editor")
            .orderBy("createdDate", "asc")
            .get()
            .then((snap) => {
                snap.forEach((doc) => {
                    this.content = doc.data().message;
                });
            });

    },
    components: {
        Editor
    },

    computed: {
        logState: function () {
            return store.state.loggedIn;
        }
    },

    methods: {
        logout: function () {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    store.commit("logout");
                    store.commit("increaseCounter", -1);
                    this.$router.replace("login");
                });
        },

        addTemplate() {
            this.statusTemplate = true;
            this.value = this.template;
        },

        deleteContent() {
            this.value = ``;
            this.statusTemplate = false;
        },

        saveMessageFromEditor(inputMessage) {
            const object = {
                createdDate: null,
                message: ""
            }

            if (!inputMessage.trim()) {
                alert("Please add your input in the editor before save it!")
            }

            object.message = inputMessage;
            object.createdDate = new Date();

            db.collection("editor")
                .add(object)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (err) {
                    console.error("Error adding document: ", err);
                });

            this.deleteContent();
        },
    },
};