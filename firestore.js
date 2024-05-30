// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js"
import { addDoc, collection, getFirestore, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js"
// DOCUMENTACIÓN: 
// https://firebase.google.com/docs/web/setup#available-libraries

//Para utilizar su base de datos cambiar la configuaración 
const firebaseConfig = {
    apiKey: "AIzaSyAE4jSxtflFIvvOQbe4ljhzZPBgiQpwUxI",
    authDomain: "proyecto-d65d8.firebaseapp.com",
    projectId: "proyecto-d65d8",
    storageBucket: "proyecto-d65d8.appspot.com",
    messagingSenderId: "214633731691",
    appId: "1:214633731691:web:5b452eb90b8c6add7bc32e"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//getFirestore es una función firestore que retorna la base de datos para su uso
const db = getFirestore(app)
//función para guardar datos
export const save = (emp) => {
    //addDoc es una función de firestore que permite añadir un nuevo documento
    //collection es una función de firestore que recibe la base de datos y la colección
    addDoc(collection(db, 'Empleados'), emp)
}
//función que trae todos los documentos de la colección
export const getData = (data) => {
    //onSnapshot es el método que permite traer todos los documentos y asignarlos a variable
    onSnapshot(collection(db, 'Empleados'), data)
}