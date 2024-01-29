import React from 'react'
import Image from 'next/image'
import AuthForm from './AuthForm'

const Home = () => {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <Image src={"/logo-trach.svg"} width={48} height={48} alt=''/>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                Messaging Page is not yet available- I'm currently building the Sign up and Sign in Functionality. 
            </h2>
        </div>
        <AuthForm/>
    </div>
  )
}

export default Home