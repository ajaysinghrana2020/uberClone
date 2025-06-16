import React from 'react';
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserLogin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userData, setUserData] = React.useState({});

    const {user, setUser} = React.useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler= async (e)=>{
        e.preventDefault
        const userData={
            email: email,
            password: password
        }

        const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

        if(response.status ===200){
            const data =response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div >
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <form onSubmit={(e)=>{
                e.preventDefault();
                submitHandler(e);
            }}>
                <h3 className='text-lg mb-2'>What's your Email</h3>
                <input 
                required 
                className='bg-[#eeeeeee] mb-7 rounded px-4 py-2 border w-full text'
                type="email" 
                value={email}
                onChange={(e) =>{ 
                    setEmail(e.target.value)}}
                placeholder="email@example.com"
                />
                <h3 className='text-lg mb-2'>What's your Password</h3>
                <input 
                required 
                className='bg-[#eeeeeee] mb-7 rounded px-4 py-2 border w-full text'
                value={password}
                onChange={(e) =>{ 
                    setPassword(e.target.value)}}
                type="password" placeholder="********" />
                <button className='bg-[#111] text-white mb-7 rounded px-4 py-2 border w-full text' type="submit">Login</button>
            </form>
                <p>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
            </div>
            <div >
                <Link  to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white mb-7 rounded px-4 py-2 border w-full text' type="submit">Sign in as a Captain</Link>
            </div>
     </div>
        
    );
};
export default UserLogin;