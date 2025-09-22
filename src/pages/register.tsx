import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e: any) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
      
    }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header/>
    <div className='flex justify-center items-center h-screen'>
        <div className='shadow-lg px-8 py-5 border w-72'>
            <h2 className='text-lg font-bold mb-4'>Register</h2>
            <form onSubmit={handleSumbit}>
                <div className="mb-4">
                    <label htmlFor="username" className='block text-gray-700'>Username</label>
                    <input type="text" placeholder='Enter Username' className='w-full px-3 py-2 border'
                    name="username" onChange={handleChanges}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'
                    name="email" onChange={handleChanges}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'
                    name="password" onChange={handleChanges}/>
                </div>
                <button className="w-full bg-green-600 text-white py-2 ">Submit</button>
            </form>
            <div className="text-center">
                <span>Already have account?</span>
                <Link to='/realme' className='text-blue-500'>Login</Link>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Register