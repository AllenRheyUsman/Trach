import React from 'react'
import Image from 'next/image'
import AuthForm from './AuthForm'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md '>
          <Link href={'/'}>
          <Image src={"/logo-trach.svg"} width={48} height={48} alt=''/>
          </Link>
            
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                Currently Developing this page asynchronously with the messaging page. You can either contact the developer -which is me(Allen) to grant you access via google or log-in using github or your own personal credentials. Click the logo if you want to go back home.
            </h2>
            <p>
              
            </p>
        </div>
        <AuthForm/>
    </div>
  )
}

export default Home