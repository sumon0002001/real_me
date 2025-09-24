import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';


const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e: any) => {
        const {name, value} = e.target;
        console.log(name, value)
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e: any) => {
        e.preventDefault()
        const { name, email, password } = values;
         if (!name || !email || !password) {
            return handleError('name, email and password are required')
        } try {
            const url = "https://backend-six-self-25.vercel.app/auth/signup"
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const result = await response.json();
             const { success, message, error } = result;
             if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/realme')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result)
            
        } catch (error) {
            handleError(error)
        }
      
    }
    
    console.log('values', values  )
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header/>
    <div className='flex justify-center items-center h-screen'>
        <div className='shadow-lg px-8 py-5 border w-72'>
            <h2 className='text-lg font-bold mb-4'>Register</h2>
            <form onSubmit={handleSumbit}>
                <div className="mb-4">
                    <label htmlFor="name" className='block text-gray-700'>Name</label>
                    <input type="text" placeholder='Enter name' className='w-full px-3 py-2 border'
                    name="name" value={values.name} onChange={handleChanges}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'
                    name="email" value={values.email} onChange={handleChanges}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'
                    name="password" value={values.password} onChange={handleChanges}/>
                </div>
                <button className="w-full bg-green-600 text-white py-2 " type='submit'>Submit</button>
            </form>
            <div className="text-center">
                <span>Already have account?</span>
                <Link to='/realme' className='text-blue-500'>Login</Link>
            </div>
        </div>
         <ToastContainer />
    </div>
    <Footer/>
    </div>
  )
}

export default Register

const url = "http://localhost:8080/auth/signup"