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

        </div>
    )
}

export default Login