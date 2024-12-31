"use client";
import React from 'react'
import logo from '@/assests/logo.png';
import { IoIosBody } from "react-icons/io";
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthPopup from '../AuthPopup/AuthPopup';
const Navbar = () => {
  const [isLoggedIn,setIsLoggedIn]=React.useState<boolean>(false);
  const [popUp,setPopUp]=React.useState<boolean>(false);
  return (
    <nav>
        <Image src={logo} alt="logo"/>
        <Link href='/'>Home</Link>
        <Link href='/about'>about</Link>
        <Link href='/profile'><IoIosBody/></Link> 
        {
          isLoggedIn?
          <button>Logout</button>
          :
          <button 
          onClick={()=>{
            setPopUp(true);
          }}>Login</button>
        } 
        {
          popUp && <AuthPopup/>
        }
    </nav>
  )
}

export default Navbar