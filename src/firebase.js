import firebase from  "./firebase"


const firebaseConfig = {
    apiKey: "AIzaSyA8AvTEbqeS3V4TuoZ9DI6jeWXjz1gq43U",
    authDomain: "cu-connect-b6ca0.firebaseapp.com",
    projectId: "cu-connect-b6ca0",
    storageBucket: "cu-connect-b6ca0.appspot.com",
    messagingSenderId: "165521714103",
    appId: "1:165521714103:web:e0d3730bf8ec0d01f89632"
  };
// this special line of code connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // this connects the database
  const db = firebaseApp.firestore();

  export default db;
