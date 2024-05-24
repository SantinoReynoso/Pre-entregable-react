// db.js
import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

const registerPurchase = async (purchaseDetails) => {
  try {
    const docRef = await addDoc(collection(db, 'purchases'), purchaseDetails);
    console.log('Purchase registered with ID: ', docRef.id);
    return docRef; // Retornar el docRef para que pueda ser utilizado en otro lugar
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e; // Lanzar el error para que pueda ser manejado en otro lugar si es necesario
  }
};

export default registerPurchase;
