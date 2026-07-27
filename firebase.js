import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API_KEY_CỦA_M",
  authDomain: "AUTH_DOMAIN_CỦA_M",
  projectId: "PROJECT_ID_CỦA_M",
  storageBucket: "STORAGE_BUCKET_CỦA_M",
  messagingSenderId: "SENDER_ID_CỦA_M",
  appId: "APP_ID_CỦA_M"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
