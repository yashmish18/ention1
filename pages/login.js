import React, { useState } from 'react'
import { Navbar, Footer } from '../components/index'
import { signIn, useSession, } from "next-auth/react";
// import styles from 'styles/Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import hero from 'assets/Group 2069.png'
import hero1 from 'assets/Group 2070.png'
import {FaGoogle, FaLinkedin} from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify'

const Login = () => {

    const {session, status} = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [passVisible, togglePass] = useState(false) 
    
    if(status === 'loading' || status === 'unauthenticated'){
         
    }else{
        router.push(searchParams.get('redirect') || '/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {email, password} = e.target
        const id = toast.loading('Processing', {type: 'info', theme: 'colored'})
        await new Promise(res => setTimeout(res, 2000))
        signIn('credentials', {redirect: false, email: email.value, password: password.value})
        .then(({err, status, ok, url}) => {
            if(ok) {
                router.push(searchParams.get('redirect') || '/')
                toast.dismiss()
            }else {
                toast.update(id, {render: 'Invalid username or password', type: 'error', isLoading: false, autoClose: 3000});
            }
        })
    }


    return (
        <main className={'main overflow-x-hidden relative'}>
            <Navbar />
            <div className='w-full lg:w-[90%] h-full mx-auto md:flex items-center justify-center pt-0 md:pt-20 px-6 md:px-10 md:px-0'>
                <div className='hidden md:block w-[30%] '>
                    <Image src={hero1} alt="/">
                    </Image>

                </div>
                <div className='w-full md:w-[50%] lg:w-[30%]  py-10 md:py-0 '>
                    <form onSubmit={handleSubmit} className='w-full max-h-full bg-white rounded-lg px-6 md:px-10 py-6'>
                        <div className="flex w-full justify-between mb-4">
                            <h2 className='cursor-pointer text-3xl text-center text-[#007E9E] font-bold border-b-4 border-b-[#007E9E] pb-2'>Login</h2>
                            <Link href="/signup">
                                <h2 className='cursor-pointer text-3xl text-center font-bold'>Signup</h2>
                            </Link>
                        </div>
                        {/* <p className='text-lg text-center pt-4'>Hey, Enter your details to get sign in
                            to your account</p> */}
                        <label className='text-left text-lg pt-4'>Email </label>
                        <input className='w-full  h-12 px-3 text-md rounded-md border-2 border-[#007E9E] mt-2 mb-6' type="email" placeholder='Email' name="email" ></input>
                        
                        <label className='text-left text-lg pt-4'>Password </label>
                        <div className="relative w-full h-12">
                            <input className='w-full h-12 px-3 text-md rounded-md border-2 border-[#007E9E] mt-2' type={passVisible ? "text" : "password"} placeholder='Password' name="password" ></input>
                            <span className='absolute top-1/2 transform -translate-y-1 right-2 cursor-pointer' onClick={() => togglePass(!passVisible)}>&#128065;</span>
                        </div>

                        <button type="submit" className='w-full h-12 text-white text-md rounded-md bg-[#007E9E] mt-6'>Log In</button>
                        <p className='text-sm text-center py-4 font-semibold underline'>or sign in with </p>
                        <div className='flex gap-6 itmes-center justify-center'>
                            <button className='text-2xl rounded-md text-[#007E9E]'><FaGoogle /></button>
                            <button className='text-3xl rounded-md  text-[#007E9E]'><FaLinkedin /></button>
                        </div>
                    </form>


                </div>
                <div className='hidden md:block w-full md:w-[20%] lg:w-[30%] px-0 md:px-0'>
                    <Image src={hero} alt="/">
                    </Image>
                </div>


            </div>
            <hr className="w-[80%] text-[#D9D9D9] mx-auto  mt-2 mb-20"></hr>


            <Footer />
        </main>
    )
}
export default Login
