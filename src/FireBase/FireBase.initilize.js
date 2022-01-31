import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const fireBaseInitialization=()=>{
    initializeApp(firebaseConfig);
}
export default fireBaseInitialization;