import firebase from "firebase";

export default {
    name: "signUp",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        /* eslint-disable */
        signUp: function () {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    (user) => {
                        this.$router.replace("home");
                    },
                    (err) => {
                        alert("Oops." + err.message);
                    }
                );
        },
        /* eslint-enable */
    },
};