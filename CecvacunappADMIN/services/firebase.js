import * as firebase from 'firebase'
import 'firebase/firebase-firestore'



// corresponde a la abse de datos, es informacion que necisitamos para poder conectarnos.Nos la da la propia aplicaicon de FIREBASE
// cada uno de estas es unica para cada base de datos, por eso es importante no cambiar nada.
const firebaseConfig = {
    apiKey: "AIzaSyCC-fDaQxitB_FyjeNGv6DdPqWOYxPumMw",
    authDomain: "cecvacunap.firebaseapp.com",
    projectId: "cecvacunap",
    storageBucket: "cecvacunap.appspot.com",
    messagingSenderId: "516670437971",
    appId: "1:516670437971:web:3560e69e6a5a2f2be0a4a6",
    measurementId: "G-1XZP6MD8BH"
}

class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth= firebase.auth()
    }
    //verifica la informacion rellenada por el usario
    login = (email, pass) => {
        return this.auth.signInWithEmailAndPassword(email, pass)   //valida en la base de datos si existe esta informacion 
    }
    // crea una cuenta con los datos rellenados por el usuario 
    createUser = async (name, user, pass) => {
        await this.auth.createUserWithEmailAndPassword(user, pass)     // se registar la informacion en la base de datos 
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }
    createCita = async (name) => {
        await this.auth.collection('cita').doc().set(name)     // se registar la informacion en la base de datos 
        
        
    }
   
   
    
}
const firebaseService = new Firebase()


export default firebaseService