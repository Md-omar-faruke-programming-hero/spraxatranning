
import React, { useState } from 'react';
import swal from 'sweetalert';

import { Link, useHistory } from 'react-router-dom';


import "./Login.css"

const Login = () => {
    

    const history = useHistory();
    
    const [loginData, setLoginData] = useState({});


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    }
    const submit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loginData)
        }).then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    swal({
                        // 
                        text: "You are logged in successfully!",
                        icon: "success",
                        button: "ok!",
                    });
                   
                   history.push("/home")

                }
                else {
                    swal({
                        // 
                        text: "Something went wrong or user not found!",
                        icon: "error",
                        button: "ok!",
                    });
                    
                }
            })
    }



    
    return (
        <div className='registerbox shadow-lg' >
            <div>
                <h3 className='createAccount my-5'>Login Form </h3>
                <form onSubmit={submit} >
                    <div className='inputfield'>
                        <input required onChange={handleInputChange} type="email" className='p-3 form-control mx-auto ' placeholder='Email' name="email" />

                        <input required onChange={handleInputChange} type="password" className='p-3 form-control mx-auto' name="" id="" placeholder='Password' name="password" />

                        

                        <p className="text-center">New member? <Link to="/signup">Sign up</Link></p>

                        <input className='btn btn-primary' type="submit" value="Login" /><br />
                        <p><small className='text-center text-dark'>Or login with</small></p>
                        <button className='btn btn-outline-secondary mb-3' ><i class="fab fa-google-plus-g me-2"></i>Login with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;