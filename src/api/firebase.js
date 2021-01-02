import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBqmoIvo-YQ168fr-9w5vVeTbs7BnJhHiw',
  authDomain: 'fir-60fb0.firebaseapp.com',
  projectId: 'fir-60fb0',
  storageBucket: 'fir-60fb0.appspot.com',
  messagingSenderId: '889495073394',
  appId: '1:889495073394:web:7db2ba38469f761e0988eb',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
