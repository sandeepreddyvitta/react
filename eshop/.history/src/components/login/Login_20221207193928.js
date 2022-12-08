import { StorefrontOutlined } from '@material-ui/icons';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { auth } from '../db/firebase';

const Login = () => {
    const navigate = useNavigate();
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithUserNameAndPassword(userName, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createWithUserNameAndPassword(userName, password)
            .then(auth => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => error.message)
    }
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className='logo'>
                    <StorefrontOutlined className='icon' fontsize='large' />
                    <h2 className='title'>eSHOP</h2>
                </div>
            </Link>
            <div className='loginContainer'>
                <h1 style={{ fontWeight: "500", marginBottom: "20px" }}>Sign_IN</h1>
                <form>
                    <label>Username:</label>
                    <input type="text" value={userName} name="userName" onChange={e => setUserName(e.target.value)} placeholder="username" /><br />
                    <label>Password:</label><br />
                    <input type="password" onClick={signIn} value={password} name="password" onChange={e => setPassword(e.target.value)} placeholder="password" /><br />
                    <button type="submit" className='submitButton'>Sign_In</button>
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