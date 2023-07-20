// código para traer las noteas del firebase

import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firabase/config";


export const loadNotes = async ( uid = '' ) => { // async porque son peticiones al firebase
    if (!uid) throw new Error(`The UID: ${uid} don't exist`);

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes`); // la base de datos es la FirebaseDB y de esta necesitas las notas que tiene cada uno de los usuarios y para ello necesitas dicha ruta
    const docs = await getDocs(collectionRef);

    // console.log(docs);
    const notes = [];
    docs.forEach( doc => {
        notes.push( { id: doc.id, ...doc.data() })
    });

    return notes;

};