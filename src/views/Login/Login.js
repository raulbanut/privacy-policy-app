import firebase from "firebase";
import store from "../../store";

export default {
    name: "login",
    data() {
        return {
            /**
             * @email and @password comes from frontend and are sent to firebase to create the connection.
             */
            email: '',
            password: '',
        };
    },
    methods: {
        /**
         * The login function is based on email and password.
         * If the user uses this option the editor will remain disabled.
         * Gets called when the user clicks on the button named Login.
         */
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
        /**
         * The login function is based on Google authentication.
         * Gets called when the user clicks on the button with Google image.
         */
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then((result) => {
                /**
                 * This verification enables the editor only if the user has the same email address.
                 * If the email isn't the same, the user will see the normal page.
                 */
                if (result.user.email == "banut.raul@gmail.com") {
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