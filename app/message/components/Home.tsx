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
              Currently developing Log-in page and messaging page but you can sign-up to try the messaging features of this app. If you choose to sign-up using google please contact me to grant you access
            </h2>
            <p>
              
            </p>
        </div>
        <AuthForm/>
    </div>
  )
}

export default Home