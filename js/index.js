// var firebaseConfig = {
//   apiKey: "AIzaSyD6dPtdnSg2Im_5CyAFuUKB-rR9tF8zfPw",
//   authDomain: "rc4-ascension-2021.firebaseapp.com",
//   projectId: "rc4-ascension-2021",
//   storageBucket: "rc4-ascension-2021.appspot.com",
//   messagingSenderId: "463448717557",
//   appId: "1:463448717557:web:5ca0eaf3ad5bc62a232dbc",
//   measurementId: "G-YMNFSD28V4"
// };

// //Initialize firebase
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// for (let i = 1; i <= 30; i++) {
//   console.log("gasdhj")
//   db.collection("grid-owners").doc("grid-" + i).set({
//     'grid-colour': ""
//   })
//   .then(() => {
//     console.log("Document successfully written!");
//   })
//   .catch((error) => {
//       console.error("Error writing document: ", error);
//   });
// }

var docRef = db.collection("grid-owners").doc("grid-1");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

