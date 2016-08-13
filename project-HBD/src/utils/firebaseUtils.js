import firebase from 'firebase';

const firebaseUtils = {
    signUp: (email, pass, data) => {
        console.log("signing up...", email, pass);
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
            if (err) {
                console.error(err.code, err.message)
            }
        }).then(res => {
          console.log("helper",res);
          firebase.database().ref("ga/wdi/robots/users/"+res.uid).set({
            uid: res.uid,
            name: data.name,
            email: data.email,
            phone: data.phone,
            dob: data.dob
          })
          window.localStorage.setItem("uid", res.uid);
          console.info(window.localStorage.getItem("uid"));
          }
        )
    },
    logIn: (email, pass) => {
        console.log("loggging in...", email, pass);
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
            // Handle Errors here.
            if (err) {
                console.error(err.code, err.message)
            }
        }).then(res => {
          console.log("logged in...", res);
          window.localStorage.setItem("uid", res.uid);
          console.info(window.localStorage.getItem("uid"));
          }
        );
    },
    logOut: () => {
        console.log("logging out...");
        firebase.auth().signOut().then(() => {
            console.log("successfully logged out");
        }, function(error) {
            // An error happened.
        }).then(res => {
          window.localStorage.setItem("uid", "");
          console.info("logged out!!", window.localStorage.getItem("uid"));
        });
    }
};

module.exports = firebaseUtils;
