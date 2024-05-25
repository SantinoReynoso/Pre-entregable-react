// db.js
import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

const registerPurchase = async (purchaseDetails) => {
  try {
    const docRef = await addDoc(collection(db, 'purchases'), purchaseDetails);
    console.log('Purchase registered with ID: ', docRef.id);
    return docRef; // Retorno el docRef 
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

export default registerPurchase;
