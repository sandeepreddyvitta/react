import { StorefrontOutlined } from '@material-ui/icons';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.scss'

const Login = () => {
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
                <h1>Sign-IN</h1>
                <form>
                    <h5>Username</h5>
                    <input type="text" value={userName} name="userName" onChange={e => setUserName(e.target.value)} placeholder="username" />
                    <h5>Password</h5>
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} placeholder="password" /><br />
                    <button type="submit">Sign_In</button>
                </form>
                <p>
                    By sign-in in your agree to the eshop website conditions of use & sale.
                    please see our privacy Notice.our Cookies Notice and our Interest based ads Notice.
                </p>
                <button className='register'> Create your eShop account</button>
            </div>
        </div>
    )
}

export default Login