import React from 'react';
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userData, setCaptainData] = React.useState({});

    const submitHandler=(e)=>{
        setCaptainData({
            email: email,
            password: password
        });
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div >
            <img className='w-16 mb-10' src="https://w7.pngwing.com/pngs/567/356/png-transparent-uber-logo-decal-lyft-business-text-people-logo-thumbnail.png" alt="" />
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
                <p>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as Captain</Link></p>
            </div>
            <div >
                <Link  to='/login' className='bg-[#10b461] flex items-center justify-center text-white mb-7 rounded px-4 py-2 border w-full text' type="submit">Sign in as a User</Link>
            </div>
     </div>
        
    );
};

export default CaptainLogin;