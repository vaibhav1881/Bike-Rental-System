import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../AppWrapper'; // Import UserContext from AppWrapper

const Login = () => {
    const { dispatch } = useContext(UserContext);

    // useNavigate hook for navigation in React Router v6
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // User login function
    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert('Invalid Credentials');
        } else {
            dispatch({ type: 'USER', payload: true });
            window.alert('Login Successful');
            navigate('/'); // Redirect to home page
        }
    };

    return (
        <>
            <header className="header">
                <div id="menu-btn" className="fas fa-bars"></div>
                <NavLink className="logo" to="/"> <span>Bike</span>Book </NavLink>
                <nav className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/exploreRentBikes">Bike Showcase</NavLink>
                </nav>
                <div id="login-btn">
                    <button className="btn">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </button>
                </div>
            </header>

            <div className="maincontainer">
                <div className="firstcontainer">
                    <div className="titled"></div>
                    <div id="userlogin" style={{ display: 'block' }} className="content">
                        <h2>Login As User</h2>
                        <form method="POST" onSubmit={loginUser}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input 
                                        type="text" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="Enter your email" 
                                    />
                                </div>

                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input 
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        placeholder="Enter your password" 
                                    />
                                </div>
                            </div>

                            <div className="button">
                                <input type="submit" value="Login" />
                            </div>
                        </form>

                        <h3>
                            Don't have an account? 
                            <NavLink style={{ color: '#ff6a00' }} to="/signup">Create one</NavLink>
                        </h3>
                        <button className="btn">
                            <NavLink style={{ color: '#ffffff' }} to="/adminsignin">Login As Admin</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
