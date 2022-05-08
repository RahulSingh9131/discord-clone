import React from 'react'
import {Link,useNavigate} from "react-router-dom";
import logo from "../assets/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from '../firebase';


function Header() {

    const [user] = useAuthState(auth) 
    const navigate = useNavigate();

    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(()=>navigate("/channel"))
        .catch((error)=>alert(error.message))
    }

  return (
    <header className='flex items-center justify-between py-4 px-6 bg-discord_blue'>
        <Link to="/">
            <img src={logo} alt="brand-name" className="w-28 h-16 object-contain brand-logo sm:w-32"/>
        </Link>
        <div className='hidden lg:flex space-x-6 '>
            <a className="link">Download</a>
            <a className="link">Nitro</a>
            <a className="link">safety</a>
            <a className="link">support</a>
            <a className="link">blog</a>
        </div>
        <div className='flex space-x-4 items-center'>
            <button className='bg-white rounded-full p-2 text-xs md:text-sm px-4 focus:outline-none
            hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap'
            onClick={!user ? signIn : ()=>navigate("/channel")}>
                {!user ? "Login" :"Open Discord"}
            </button>
            <MenuIcon className="h-9 text-white cursor-pointer lg:hidden "/>
        </div>
    </header>
  )
}

export default Header