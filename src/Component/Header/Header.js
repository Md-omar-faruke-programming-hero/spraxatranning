import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Header = () => {
    const{user,logout}=useAuth();
    return (
        <div>
            <nav class="navbar  navbar-expand-lg navbar-light bg-white bottomargin mb-5" >
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link class="navbar-brand" href="#">Spraxa</Link>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item me-4">
                                <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item me-4">
                                <Link class="nav-link active" aria-current="page" href="#">Find a developer</Link>
                            </li>
                            <li class="nav-item me-4">
                                <Link class="nav-link active" aria-current="page" href="#">App</Link>
                            </li>
                            <li class="nav-item me-4">
                                <Link class="nav-link active" aria-current="page" href="#">Testmonial</Link>
                            </li>
                            <li class="nav-item me-4">
                                <Link class="nav-link active" aria-current="page" href="#">About us</Link>
                            </li>
                            <li class="nav-item me-4">
                                {
                                    user.email? <button onClick={logout} className='btn btn-danger'>LogOut</button>
                                    : <button>Login</button>
                                }
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;