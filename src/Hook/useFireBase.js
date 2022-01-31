

import {  useState } from "react";
import fireBaseInitialization from "../FireBase/FireBase.initilize";



fireBaseInitialization()
const useFireBase = () => {

  const[user,setUser]=useState(false)

  return{
    user,
    setUser
  }
}
export default useFireBase;
