import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const configObj = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};
const app = initializeApp(configObj);

const db = getFirestore(app);

export async function fetchVans() {
  try {
    const vansCollection = collection(db, "vans");
    const vansSnapshot = await getDocs(vansCollection);
    const vansList = vansSnapshot.docs.map((doc) => doc.data());
    return vansList;
  } catch (err) {
    throw err;
  }
}

export async function fetchVanById(id) {
  try {
    const response = await fetch(`/api/vans/${id}`);
    if (!response.ok) {
      throw error;
    }
    return (await response.json()).vans;
  } catch (err) {
    throw err;
  }
}

export async function loginUser(credentials) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (!response.ok) {
      throw {
        message: data.message,
        statusText: response.statusText,
        status: response.status,
      };
    }
  } catch (err) {
    throw err;
  }
}
