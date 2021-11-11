import firebase from "firebase";

export default {
    name: "login",
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        /* eslint-disable */
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
                this.$router.replace('home');
            }).catch((err) => {
                alert("Ooops. " + err.message)
            });
        }
        /* eslint-enable */
    },
};