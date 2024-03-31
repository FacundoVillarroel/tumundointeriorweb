import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSENGER,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const storage = getStorage(app);

export const uploadImage = async (file) => {
  const imagesRef = ref(storage, `images/${file.name}`);
  const response = await uploadBytes(imagesRef, file);
  const imageStoredUrl = await getDownloadURL(response.ref);
  return imageStoredUrl;
};
