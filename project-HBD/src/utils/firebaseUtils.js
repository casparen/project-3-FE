import firebase from 'firebase';

const firebaseUtils = {
    signUp: (email, pass) => {
        console.log("signing up...", email, pass);
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
            if (err) {
                console.error(err.code, err.message)
            }
        });
    },
    logIn: (email, pass) => {
        console.log("loggging in...", email, pass);
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
            // Handle Errors here.
            if (err) {
                console.error(err.code, err.message)
            }
        });
    },
    logOut: () => {
        console.log("logging out...");
        firebase.auth().signOut().then(() => {
            console.log("successfully logged out");
        }, function(error) {
            // An error happened.
        });
    }
};

module.exports = firebaseUtils;
