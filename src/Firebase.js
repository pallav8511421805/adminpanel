// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// import { getFirestore } from 'firebase/firestore'

// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
// export const db = getFirestore()

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyA7mpQFYWVldJq21d5fg89uLROKJBp9M0Y',
  authDomain: 'adminpanel-86d74.firebaseapp.com',
  projectId: 'adminpanel-86d74',
  storageBucket: 'adminpanel-86d74.appspot.com',
  messagingSenderId: '537861207845',
  appId: '1:537861207845:web:53e350f9cd900c8a1dcccc',
  measurementId: 'G-Q74H2MJR3K',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export { db }
