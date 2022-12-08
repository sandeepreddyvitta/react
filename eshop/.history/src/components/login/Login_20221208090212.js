import { StorefrontOutlined } from '@material-ui/icons';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { auth } from '../db/firebase';
// require('firebase/auth');
// require('firebase/database');

const Login = () => {
    const navigate = useNavigate();
    const signIn = e => {
        e.preventDefault();
        window.testing123 = auth;
        console.log("test", auth);
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => error.message)
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className='logo'>
                    <StorefrontOutlined className='icon' fontSize='large' />
                    <h2 className='title'>eSHOP</h2>
                </div>
            </Link>
            <div className='loginContainer'>
                <h1 style={{ fontWeight: "500", marginBottom: "20px" }}>Sign_IN</h1>
                <form>
                    <label>Username:</label>
                    <input type="email" value={email} name="userName" onChange={e => setEmail(e.target.value)} placeholder="username" /><br />
                    <label>Password:</label><br />
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} placeholder="password" /><br />
                    <button type="submit" onClick={signIn} className='submitButton'>Sign_In</button>
                </form>
                <p style={{ marignTop: "15px", fontSize: "12px" }}>
                    By sign-in in your agree to the eshop website conditions of use & sale.
                    please see our privacy Notice. Our Cookies Notice and our Interest based ads Notice.
                </p>
                <button type='submit' onClick={register} className="registerButton"> Create your eShop account</button>
            </div>
        </div>
    )
}

export default Login