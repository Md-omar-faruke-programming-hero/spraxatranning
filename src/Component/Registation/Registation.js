import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../Hook/useAuth';
// import useFireBase from '../../Hook/useFireBase';
import "./Registation.css"

const Registation = () => {
    const { createUser, error, setError } = useAuth();

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

          
            createUser(email, pass1, history);
            setError('');
            setEmail('');
            setPassword1('');
            setPassword2('');
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