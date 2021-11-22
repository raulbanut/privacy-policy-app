import firebase from "firebase";
import { db } from "../../main";
import store from "../../store";

import { VueEditor } from 'vue2-quill-editor'

export default {
    name: "Home",

    /**
     * The editor component.
     */
    components: {
        VueEditor,
    },

    data() {
        return {
            /**
             * the @statusTemplate is used for checking if the user pressed the 'Add Template' Button.
             */
            statusTemplate: false,
            /**
             * the @template is used to extract from firebase the saved template.
             */
            template: "",

            /**
             * the @value is used by the VueEditor to store the text.
             */
            value: "",
            /**
             * the @content is used to extract from firebase the older version of the text, which the user can edit.
             */
            content: "",
            /**
             * the @customToolbar is used to set the VueEditor Toolbar options.
             * You can find mode here: https://openbase.com/js/vue2-quill-editor/documentation#example-3
             */
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'bullet' }],
                [{ 'header': [1, 3, false] }],
                ['link']
            ],
        };
    },

    mounted() {
        /**
         * We set the connection with the firebase.
         */
        const db = firebase.firestore();

        /**
         * We connect to the collection named "template" and extract the text template.
         */
        db.collection("template")
            .get()
            .then((snap) => {
                const mesaj = "";
                snap.forEach((doc) => {
                    this.template = doc.data().message;
                })
            });

        /**
         * We connect to the collection named "editor" and extract the last document from the collection.
         */
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
        /**
         * This function is used to check if the user have the acces to the editor. 
         */
        logState: function () {
            return store.state.loggedIn;
        }
    },

    methods: {
        /**
         * The logout function will disable the editor access for the user and refresh the page.
         */
        logout: function () {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    store.commit("logout");
                    store.commit("increaseCounter", -1);
                    this.$router.go();
                });
        },
        /**
         * This function will add the template.
         */
        addTemplate() {
            this.statusTemplate = true;
            this.value = this.template;
        },
        /**
         * This function will let the user to edit the last document from "editor" collection from Firebase.
         */
        editContent() {
            this.value = this.content;
        },
            /**
             * This function will delete the content from VueEditor.
             */
        deleteContent() {
            this.value = ``;
            this.statusTemplate = false;
        },
        /**
         * This function will save the new text from VueEditor.
         */
        saveMessageFromEditor(inputMessage) {
            /**
             * We use the @createdDate to keep up when the user added the new text and to make it easier to extract the texts.
             */
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