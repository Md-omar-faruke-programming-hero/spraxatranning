import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import "./Registation.css"

const Registation = () => {
   
    const[error,setError]=useState('')
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [pass1, setPassword1] = useState('');
    const [pass2, setPassword2] = useState('');

    const createNewUser = (e) => {
        e.preventDefault();

        if (email === "" || pass1 === "") {
            setError(" its reqired");
        }
        if (pass1 !== pass2) {
            swal({
                title: "Oops!",
                text: "Password don't matched! try again please",
                icon: "warning",
                button: "Ok",
            });

        }

        else {

          const registerUserInfo={email,pass1}
          fetch('http://localhost:5000/createUser',{
              method:"POST",
              headers:{
                  "content-type":"application/json"
              },
              body:JSON.stringify(registerUserInfo)
          }).then(res=>res.json())
          .then(data=>{
              if(data.insertedId){
                swal({
                    // 
                    text: "Your account create successfully!",
                    icon: "success",
                    button: "ok!",
                  });
                  
          
                  
                  history.push("/login")
              }
          })
            
            
            
           
        }
            
    }

    return (

        <div className='bg w-100 h-100'>
            <div className='registerbox shadow-lg ' >

                <div className=''>
                    <h3 className='createAccount my-5'>Create account</h3>
                    <form onSubmit={createNewUser}>
                        <div className='inputfield'>
                            <input className='form-control mx-auto ' required onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'
                                req />

                            <input className='form-control mx-auto ' onChange={(e) => setPassword1(e.target.value)} type="password" name="" id="" placeholder='Password' />

                            <input className='form-control mx-auto ' required onChange={(e) => setPassword2(e.target.value)} type="password" name="" id="" placeholder='Re-enter password' />
                            <p style={{ color: "red", textAlign: "center" }}>{error}</p>

                            <input className='btn btn-primary' type="submit" value="Sign up" />
                        </div>
                    </form>

                </div>


            </div>
        </div>



    );
};

export default Registation;