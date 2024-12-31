import React from 'react'
import './AuthPopup.css'
import Image from 'next/image'
import logo from '@/assests/logo.png'
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
const AuthPopup = () => {
    const [showSignup,setShowSignup]=React.useState<boolean>(false);
    const handleLogin=()=>{

    }
  return (
    <div className='popup'>
        {
            showSignup?(
                <div className='authform'>
                    <div className='left'>
                        <Image src={logo} alt="Logo"/>
                    </div>
                    <div className='right'>
                        <h1>Sign Up to become a freak</h1>
                        <form action="">
                        <Input
                            placeholder="Email"
                            size="lg"
                            variant="outlined"
                        />
                        <Input
                            placeholder="Password"
                            size="lg"
                            variant="outlined"
                            type='password'
                        />
                        <div className='form_input_leftright'>
                            <Input size="lg" variant='outlined' type='number' placeholder='Age'/>
                            <Input size="lg" variant='outlined' type='number' placeholder='Weight'/>
                            <Select
                                size="lg"
                                color="neutral"
                                placeholder="Gender"
                            >
                                <Option value='male'>Male</Option>
                                <Option value='female'>Female</Option>
                                <Option value='other'>Other</Option>
                            </Select>
                            <br/>
                            <label htmlFor="">
                                Height
                            </label>
                            <div className='form_input_leftright'>
                                <Input size="lg" variant='outlined' type='number' placeholder='ft'/>
                                <Input size="lg" variant='outlined' type='number' placeholder='in'/>
                            </div>
                        </div>
                        <button onClick={()=>{
                            handleLogin()
                        }}>SignUp</button>
                        </form>
                        <p>Already have an account? <button onClick={()=>{
                        setShowSignup(false)
                    }}>
                        Login
                    </button></p>
                    </div>
                    
                </div>
            ):(
                <div className='authform'>
                    <div className='left'>
                        <Image src={logo} alt="Logo"/>
                    </div>
                    <div className='right'>
                        <h1>Login to become a freak</h1>
                        <form action="">
                        <Input
                            placeholder="Email"
                            size="lg"
                            variant="outlined"
                        />
                        <Input
                            placeholder="Password"
                            size="lg"
                            variant="outlined"
                            type='password'
                        />
                        <button onClick={()=>{
                            handleLogin()
                        }}>Login</button>
                        </form>
                        <p>Don't have an account? <button onClick={()=>{
                        setShowSignup(true)
                    }}>
                        SignUp
                    </button></p>
                    </div>
                    
                </div>
            )
        }
    </div>
  )
}

export default AuthPopup