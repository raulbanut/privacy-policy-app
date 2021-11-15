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

            template: `<h1 class="section-header">Privacy Notice</h1><h3 class="section-title">Who we are</h3><p class="section-content">ACCESA IT Systems SRL, Accesa IT Consulting and Ratiodata Romania SRL (referred to as “we”, “us”) are Romanian companies managing software projects, including development, implementation and support.</p>
                <h3 class="section-title">What personal data we process</h3>
                <p class="section-content">
                We are personal data controllers. We collect the following types of personal data from you:
                <ul>
                <li>Name, surname</li>
                <li>Email</li>
                <li>Phone (optional)</li>
                </ul>
                </p>
                `,

            value: ``,

            value2: "<h1 class=\"section-header\">Privacy 2 Notice</h1><h3 class=\"section-title\">Who we are</h3><p class=\"section-content\">ACCESA IT Systems SRL, Accesa IT Consulting and Ratiodata Romania SRL (referred to as “we”, “us”) are Romanian companies managing software projects, including development, implementation and support.</p>\n                <h3 class=\"section-title\">What personal data we process</h3>\n                <p class=\"section-content\">\n                We are personal data controllers. We collect the following types of personal data from you:\n                <ul>\n                <li>Name, surname</li>\n                <li>Email</li>\n                <li>Phone (optional)</li>\n                </ul>\n                </p>\n                ",

            // customToolbar: [
            //     ['bold','italic','underline'],
            //     [{ 'list': 'ordered'}, {'list': 'bullet'}]
            // ]

            // counterSectiuni: 0,

            // sectiuni: [],

            // sectiune: {
            //     id: 0,
            //     title: "",
            //     paragraph: "",
            //     list: [],
            // },

            // obiect: {
            //     message: "",
            //     createdAt: "",
            // },

            // stateAdd: false,
        };
    },

    mounted() {
        const db = firebase.firestore();

        db.collection("editor")
        .get()
        .then((snap)=>{
            const mesaj = "";
            snap.forEach((doc) =>{
                if (doc.data() == "6a86XEmeA7rtY302juQP"){
                    console.log("Hello")
                    mesaj = doc.data().message;
                }
                this.value = mesaj;
            })
        })

        // db.collection("section")
        //     .get()
        //     .then((snap) => {
        //         const sectiuni = [];
        //         snap.forEach((doc) => {
        //             if (doc.data().id >= 0) {
        //                 db.collection("/section/" + doc.id + "/list-items")
        //                     .get()
        //                     .then((snap2) => {
        //                         const lista = [];

        //                         snap2.forEach((docs) => {
        //                             console.log(docs.data().message);
        //                             lista.push(docs.data());
        //                         });
        //                         this.sectiune.list = lista;
        //                     });
        //                 this.sectiune.id = doc.data().id;
        //                 this.sectiune.paragraph = doc.data().paragraph;
        //                 this.sectiune.title = doc.data().title;
        //                 sectiuni.push(this.sectiune);
        //                 this.counterSectiuni += 1;
        //             }
        //         });
        //         this.sectiuni = sectiuni;
        //     });

        // store.dispatch('increaseCounter', 2);

        // db.collection("sectionContent")
        //   // .orderBy("createdAt", "asc")
        //   .get()
        //   .then((snap) => {
        //     const sectionContent = [];
        //     snap.forEach((doc) => {
        //       sectionContent.push(doc.data().paragraphMessage);
        //     });
        //     this.sectionContent = sectionContent;
        //   });

        // db.collection("section")
        // // .orderBy("createdAt", "asc")
        // .get()
        // .then((snap) => {
        //   const sectiune = [];
        //   snap.forEach((doc) => {
        //     sectiune.push(doc.data());
        //     // console.log(db.collection("list").get());
        //   });
        //   this.sectiune = sectiune;
        // });
    },
    components: {
        Editor
    },
    methods: {
        logout: function () {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace("login");
                });
        },

        addTemplate() {
            this.statusTemplate = true;
            this.value = this.template;
        },

        deleteContent() {
            this.value = ``;
        },

        // getTextFromTextArea: function (text) {
        //     if (text != "") {
        //         console.log(text);
        //         this.messageFromTextArea = "";
        //     }
        // },

        // updateParagraph(message) {
        //     this.sectiune.paragraph = message;
        // },

        // saveData() {
        //     const object = {
        //         message: "",
        //         createdAt: "",
        //     };

        //     object.message = this.obiect.message;
        //     object.createdAt = new Date();

        //     this.sectiune.list.push(object);

        //     this.obiect.message = "";

        //     db.collection(
        //         "/section/elgE1P9mWAclN7ErT9En/list-items"
        //     )
        //         .add(object)
        //         .then(function (docRef) {
        //             console.log("Document written with ID: ", docRef.id);
        //         })
        //         .catch(function (err) {
        //             console.error("Error adding document: ", err);
        //         });
        // },

        saveMessageFromEditor(inputMessage) {
            const object = {
                message: ""
            }

            object.message = inputMessage;

            // this.value2 = object.message;

            db.collection("editor")
                .add(object)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (err) {
                    console.error("Error adding document: ", err);
                });
        },

        // deleted: function (message) {
        //     console.log(message);
        //     db.collection("/section/elgE1P9mWAclN7ErT9En/list-items")
        //         .get()
        //         .then((querySnapshot) => {
        //             querySnapshot.forEach((doc) => {
        //                 if (doc.data().message == message) {
        //                     db.collection("/section/elgE1P9mWAclN7ErT9En/list-items")
        //                         .doc(doc.id)
        //                         .delete()
        //                         .then(() => {
        //                             console.log("Document successfully deleted!");
        //                         })
        //                         .catch((error) => {
        //                             console.error("Error removing document: ", error);
        //                         });
        //                 }
        //             });
        //         });
        // },
    },
};