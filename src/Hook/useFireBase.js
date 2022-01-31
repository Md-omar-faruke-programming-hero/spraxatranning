
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import fireBaseInitialization from "../FireBase/FireBase.initilize";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

fireBaseInitialization()
const useFireBase = () => {

  const [loading, setLoadion] = useState(true);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState('')
  const [error, setError] = useState('')

  //  create user with email and password
  const createUser = (email, password, history) => {
    setLoadion(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        swal({
          // 
          text: "Your account create successfully!",
          icon: "success",
          button: "ok!",
        });
        setUser(user)

        setError('')
        history.push("/login")
      }).catch((error) => {

        setError(error.message)
        // setError('Password should be at least 6 characters')

      }).finally(() => setLoadion(false));
  }

  // signin user using user password
  const loginUser = (email, password, history) => {
    setLoadion(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
        history.push("/home")
        //return { success: true }

      }).catch((error) => {

        setError('Username or Password is incorrect.');//error.message

      }).finally(() => setLoadion(false));
  }

  // sign in with google
  const history = useHistory()
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        const user = result.user;
        history.push('/home')
        // ...
      }).catch((error) => {



        setError(error.message)

      }).finally(() => setLoadion(false));
  }
  useEffect(() => {
    setLoadion(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
      setLoadion(false)

    });
  }, [auth])




  // logout function
  const logout = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      // An error happened.
    })
  }



  return {
    user,
    createUser,
    loginUser,
    error,
    setError,
    googleSignIn,
    logout,
    loading,
    setLoadion


  }
}
export default useFireBase;
