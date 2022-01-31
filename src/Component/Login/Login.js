import { GooglePlusOutlined } from '@ant-design/icons/lib/icons';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
// import useFireBase from '../../Hook/useFireBase';
import "./Login.css"

const Login = () => {
    const { loginUser, user, error, googleSignIn } = useAuth();

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formState, setFormState] = useState([]);


    // const {name, value} = event.target;
    // setFormState({[name] : value});

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

    const submit = (e) => {
        e.preventDefault();
        const { email, password } = formState;
        loginUser(email, password, history);
    }

    const googleSignIn1 = () => {
        googleSignIn();
    }

    if (user.email) {
        return <Redirect to="/home" />
    }
    return (
        <div className='registerbox shadow-lg' >
            <div>
                <h3 className='createAccount my-5'>Login Form </h3>
                <form onSubmit={submit} >
                    <div className='inputfield'>
                        <input required onChange={getEmail} type="email" className='p-3 form-control mx-auto ' placeholder='Email' />

                        <input required onChange={getPassword} type="password" className='p-3 form-control mx-auto' name="" id="" placeholder='Password' />

                        <p style={{ color: "red", textAlign: "center" }}>{error}</p>

                        <p className="text-center">New member? <Link to="/signup">Sign up</Link></p>

                        <input className='btn btn-primary' type="submit" value="Login" /><br />
                        <p><small className='text-center text-dark'>Or login with</small></p>
                        <button onClick={googleSignIn()} className='btn btn-outline-secondary mb-3' ><i class="fab fa-google-plus-g me-2"></i>Login with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;