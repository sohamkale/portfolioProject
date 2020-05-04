import firebase from 'firebase';
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyCRqnYoROpaH84x1M8NCS3iZTOTR90_JvM",
    authDomain: "portfolioproject-2bfd4.firebaseapp.com",
    databaseURL: "https://portfolioproject-2bfd4.firebaseio.com",
    projectId: "portfolioproject-2bfd4",
    storageBucket: "portfolioproject-2bfd4.appspot.com",
    messagingSenderId: "1042630764443",
    appId: "1:1042630764443:web:8563c2a5324ca9171be33e"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const db = firebase.database();

  export {db, storage, fire as default };