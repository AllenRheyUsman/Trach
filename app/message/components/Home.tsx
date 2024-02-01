import React from 'react';
import Image from 'next/image';
import AuthForm from './AuthForm';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex min-h-full justify-center sm:px-6 lg:px-8 '>
       <div className='flex-none w-[35%] bg-purple-200  p-10 self-center h-3/4 hover:bg-purple-300'>
        <div className='flex items-center justify-center text-center  h-full'>
          <Image src={'/login.png'} width={450} height={100} alt='asd' className=' ' />
        </div>
      </div>
      <div className='flex-none w-[35%] bg-white   self-center h-3/4'>
        <div className='p-10 h-full'>
          <Link href={'/'}>
            <Image src={"/logo-trach.svg"} width={78} height={48} alt='' className=' mt-3'/>
          </Link>
          <h2 className='text-start text-4xl font-extrabold tracking-tight text-purple-900 mt-10'>
            Login to your account!
          </h2>
          <AuthForm />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
