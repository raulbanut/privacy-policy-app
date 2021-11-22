import firebase from "firebase";
import store from "../../store";

export default {
    name: "login",
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {

        login: function () {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert("Ooops. " + err.message);
                    }
                );
        },
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then((result) => {
                if (result.user.email == "banut.raul@gmail.com"){
                    store.commit("login");
                    store.commit("increaseCounter", 1);
                }
                this.$router.replace('home');
            }).catch((err) => {
                alert("Ooops. " + err.message)
            });
        }
    },
};