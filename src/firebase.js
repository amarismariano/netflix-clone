import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiK8hc_zlyXrKCtxdRiYkABFDpfR7Nuh8",
  authDomain: "netflix-eudes-clone.firebaseapp.com",
  projectId: "netflix-eudes-clone",
  storageBucket: "netflix-eudes-clone.appspot.com",
  messagingSenderId: "948643416805",
  appId: "1:948643416805:web:2ef9e2bcf896d077bf220c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
