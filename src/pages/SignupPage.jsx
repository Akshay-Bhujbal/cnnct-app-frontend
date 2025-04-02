import React, {useState} from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signuppage.css'
import SignupImg from '../assets/images/signup.png'
import logo from '../assets/images/logo.png'

import icon1 from '../assets/icons/sale.png';
import icon2 from '../assets/icons/edu.png';
import icon3 from '../assets/icons/fin.png';
import icon4 from '../assets/icons/gov.png';
import icon5 from '../assets/icons/cons.png';
import icon6 from '../assets/icons/rec.png';
import icon7 from '../assets/icons/tech.png';
import icon8 from '../assets/icons/mark.png';


const categories = [
    { name: "Sales", icon: icon1},
    { name: "Education", icon: icon2 },
    { name: "Finance", icon: icon3 },
    { name: "Government & Politics", icon: icon4 },
    { name: "Consulting", icon: icon5 },
    { name: "Recruiting", icon: icon6 },
    { name: "Tech", icon: icon7 },
    { name: "Marketing", icon: icon8 }
];


const SignupPage = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const { firstname, lastname, email, password, confirmPassword, agreeToTerms } = signupData;

    const {email:username, password:loginPassword} = loginData;
  
    const handleSignupChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSignupData({...signupData, [name]: type === 'checkbox' ? checked : value});
    };

    const handleLoginChange = (e) => {
        const {name, value} = e.target;
        setLoginData({ ...loginData, [name]: value});
    };


    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!firstname || !lastname || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError("Password do not match");
            return;
        }

        if (password.length < 6) {
            setError('Password must be atleast 6 characters');
            return;
        }

        if (!agreeToTerms) {
            setError('You must agree to the Terms of use and Privacy Policy');
            return
        }

        try {
            const res = await axios.post('http://localhost:4000/api/auth/signup', {
                firstname,
                lastname,
                email,
                password,
            });
            console.log(res.data);
            setIsSignup(false)
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError('');
    

        if (!username || !loginPassword) {
            setError('Please fill in all fields');
            return;
        }

        console.log("Login Data Sent:", { email: username, password: loginPassword });

        try {
            const res = await axios.post('http://localhost:4000/api/auth/login', {email: username, password: loginPassword});
            console.log("Login Response:", res.data);
            localStorage.setItem('token', res.data.token);
            setIsAuthenticated(true); 

        } catch (err) {
            console.error("Login Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || 'Login failed')
        }
    };

    const handleContinue = () => {
        if (!selectedCategory) {
            setError("Please select a category before continuing.");
            return;
        }
        navigate('/events'); 
    };
    


    return (
        <div className='signup-page'>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className='logo'/>
                <h2>CNNCT</h2>
            </div>

            <div className='signup-form-container'>
                {error && <p className='error'>{error}</p>}
                {isAuthenticated ? (
                    <div className="reference-form">
                        <h1 className='reference-heading'>Your References</h1>
                        <div className="form-group">
                            <input className='username-input' type="text" placeholder="Tell us your username" />
                        </div>

                        <h3 className='category-head'>Select one category that best describes your CNNCT</h3>
                        <div className="categories-grid">
                            {categories.map((category, index) => (
                                <div 
                                    key={index} 
                                    className={`category-option ${selectedCategory === category.name ? 'selected' : ''}`} 
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    <img src={category.icon} alt={category.name} className="category-icon" />
                                    {category.name}
                                </div>
                            ))}
                        </div>

                        <button className="continue-button" onClick={handleContinue}>Continue</button>
                    </div>
                ):(

                isSignup ? (
                    <div className="signup-form">
                        <div className='header-signup'>
                            <h2>Create an account</h2>
                            <span className='signin-link'>
                                <a href="#" onClick={(e) => { e.preventDefault(); setIsSignup(false); console.log("Switching to Sign In form"); }}  className="signin-link">
                                    Sign in instead
                                </a>
                            </span>
                        </div>

                        <form onSubmit={handleSignupSubmit}>
                            <div className='form-group'>
                                <label className='input-label'>First name</label><br />
                                <input className='input-box'
                                    type="text"
                                    name='firstname'
                                    pattern='^[A-Za-z]{2,20}$'
                                    value={firstname}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label className='input-label'>Last name</label><br />
                                <input className='input-box'
                                    type="text"
                                    name='lastname'
                                    pattern='^[A-Za-z]{2,20}$'
                                    value={lastname}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className='input-label'>Email</label> <br />
                                <input className='input-box'
                                    type="email"
                                    name="email"
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    value={email}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className='input-label'>Password</label> <br />
                                <input className='input-box'
                                    type="password"
                                    name="password"
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                                    value={password}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className='input-label'>Confirm Password</label> <br />
                                <input className='input-box'
                                    type="password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>
                            <div className="form-group terms">
                                <input className='check-input'
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={agreeToTerms}
                                    onChange={handleSignupChange}
                                    required
                                />
                                <label className='check-label' >
                                    By creating an account, I agree to our{" "}
                                    <a className='check-label' href="">Terms of Use</a> <br /> and{" "}
                                    <a className='check-label' href="">Privacy Policy</a>
                                </label>
                            </div>

                            <button className='signup-button' type="submit">Create an account</button>  
                        </form>
                    </div>
                    ) : (
                    <div className="login-form">

                        <div className='header-signin'>
                            <h1>Sign in</h1>
                        </div>

                        <form onSubmit={handleLoginSubmit}>
                            <div>
                                <input className='signin-inputbox'
                                    type='email'
                                    name='email'
                                    placeholder='Username'
                                    value={username}
                                    onChange={handleLoginChange}
                                    required
                                />
                                <br />

                                <input className='signin-inputbox'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={loginPassword}
                                    onChange={handleLoginChange}
                                    required
                                />
                                <div>
                                    <button className='login-button' type='submit'>Log in</button>
                                </div>
                                <div className='no-account'>
                                    <span>Don't have an account?</span>
                                    <a href="#" onClick={(e) => { e.preventDefault(); setIsSignup(true); }}>Sign up</a>
                                </div>
                                
                            </div>
                        </form>
                    </div> 
                    )
                )}
                <div className="footer">
                    This site is protected by reCAPTCHA and   
                    <a href="#">Google Privacy Policy</a>  
                    and  
                    <a href="#">Terms of Service</a>  
                    apply.
                </div>
            </div>


            <div className="signup-image-container">
                <img className='signup-img' src={SignupImg} alt="signup-img" />
            </div>
        </div>
  );
};

export default SignupPage;