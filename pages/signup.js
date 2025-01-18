import React, { useRef, useState } from 'react'
import { Navbar, Footer } from '../components/index'
import { signIn, useSession, getSession } from "next-auth/react";
import styles from 'styles/Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import hero from 'assets/Group 2069.png'
import hero1 from 'assets/Group 2070.png'
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import {FaGoogle, FaLinkedin} from 'react-icons/fa';
const Signup = () => {

    const {session, status} = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [passVisible, togglePass] = useState(false) 
    const form = useRef()

    if(status === 'loading' || status === 'unauthenticated'){
         
    }else{
        router.push(searchParams.get('redirect') || '/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        toast.dismiss()
        const {name, email, phone, password } = e.target
        const id = toast.loading('Processing', {type: 'info', theme: 'colored'})

        if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email.value)){
            await new Promise(res => setTimeout(res, 2000))
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json'
                },
                body: JSON.stringify({name: name.value, email: email.value, password: password.value})
            })
            
            if(res.status === 200) {
                toast.update(id, {render: 'Your account has been created successfully. Please log in now to proceed.', type: 'success', isLoading: false, autoClose: 3000});
                router.push('/login')
            }else{
                const data = await res.json()
                toast.update(id, {render: <>
                    <h4 className="text-base">Failed to create account</h4>
                    <h5 className="text-sm"> Err: {data.message} </h5>
                </>, type: 'error', isLoading: false, autoClose: 3000});
            }
            return
        }
        toast.update(id, {render: 'Please enter valid email address', type: 'error', isLoading: false, autoClose: 3000});
    }


    return (
        <main className={'main overflow-x-hidden relative'}>
            <Navbar />
            <div className='w-full lg:w-[90%] h-full mx-auto md:flex items-center justify-center pt-0 md:pt-20 px-6 md:px-10 md:px-0'>
                <div className='hidden md:block md:w-[20%] lg:w-[30%] '>
                    <Image src={hero1} alt="/">
                    </Image>
                </div>
                <div className='w-full md:w-[50%] lg:w-[35%]  py-10 md:py-0  '>
                    <form onSubmit={handleSubmit} ref={form} className='w-full max-h-full bg-white rounded-lg  px-6 md:px-10 py-4'>
                        <div className="flex w-full justify-between mb-4">
                            <Link href="/login">
                                <h2 className='cursor-pointer text-3xl text-center font-bold'>Login</h2>
                            </Link>
                            <h2 className='cursor-pointer text-3xl text-center text-[#007E9E] font-bold border-b-4 border-b-[#007E9E] pb-2'>Signup</h2>
                        </div>
                        {/* <p className='text-lg text-center pt-4'>Hey, Enter your details to get sign in
                            to your account</p> */}
                        <label className='text-left text-lg pt-4 md:pt-2'>Name </label>
                        <input className='w-full  h-10  px-3 text-md rounded-md border-2 border-[#007E9E] mt-1 mb-2' required={true} type="text" placeholder='Full Name' name="name" ></input>

                        <label className='text-left text-lg pt-2 md:pt-2'>Email </label>
                        <input className='w-full h-10  px-3 text-md rounded-md border-2 border-[#007E9E] mt-1 mb-2' required={true} type="email" placeholder='Email' name="email" pattern="[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" ></input>

                        <label className='text-left text-lg pt-2 md:pt-2'>Phone </label>
                        <input className='w-full h-10  px-3 text-md rounded-md border-2 border-[#007E9E] mt-1 mb-2' required={true} type="text" placeholder='Phone' name="phone" pattern="[0-9]{10}" ></input>

                        <label className='text-left text-lg pt-2'>Password </label>
                        <div className="relative w-full h-12">
                            <input className='w-full h-10  px-3 text-md rounded-md border-2 border-[#007E9E] mt-1 mb-2' required={true} type={passVisible ? "text" : "password"} placeholder='Password' name="password" ></input>
                            <span className='absolute top-1/2 transform -translate-y-1 right-2 cursor-pointer' onClick={() => togglePass(!passVisible)}>&#128065;</span>
                        </div>

                        <button type="submit" className='w-full h-10  text-white text-md rounded-md bg-[#007E9E] mt-4 md:mt-4'>Sign Up</button>
                        <p className='text-sm text-center py-4 md:py-2 font-semibold underline'>or login with </p>
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
export default Signup
