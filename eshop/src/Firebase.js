// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyD6zggVrd6a3PV6G_Qd33TpBh9uCAfwIag",
    authDomain: "eshop-ed4cf.firebaseapp.com",
    projectId: "eshop-ed4cf",
    storageBucket: "eshop-ed4cf.appspot.com",
    messagingSenderId: "297963026690",
    appId: "1:297963026690:web:5f2e56d753d50f8cc3ea1b",
    measurementId: "G-HEVMD3KX4B"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export {db,auth};