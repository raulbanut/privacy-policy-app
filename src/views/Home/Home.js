import firebase from "firebase";
import { db } from "../../main";
import store from "../../store";

import { VueEditor } from 'vue2-quill-editor'

export default {
    name: "Home",

    components: {
        VueEditor,
    },

    data() {
        return {
            statusTemplate: false,
            template: "",

            apply: '',

            value: "",
            content: "",

            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'bullet' }],
                [{ 'header': [1, 3, false] }],
                ['link']
            ],
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
                    this.$router.replace("home");
                });
        },

        addTemplate() {
            this.statusTemplate = true;
            this.value = this.template;
        },

        editContent() {
            this.value = this.content;
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