'use client';
import React from 'react'
import  {useState, useCallback} from 'react'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Input from './inputs/Input';
import Button from './Button';
import AuthSocialButton from './AuthSocialButton';
import {BsGithub, BsGoogle} from 'react-icons/bs'


type Variant = "LOGIN" | 'REGISTER';

const AuthForm = () => {
    const[variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState(false);
    const toggleVariant = useCallback(()=>{
        if ( variant === "LOGIN"){
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
        
        
    }, [variant]);
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }

    }=useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
        }
    });
    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);
        if (variant === 'REGISTER') {

        }
        if (variant==='LOGIN'){

        }
    }

    const socialAction = (action:string)=>{
        setIsLoading(true);
    }
  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form 
            className='space-y-6'
            onSubmit={handleSubmit(onSubmit)}
        >
            {variant === 'REGISTER' && (
            <Input label='name' register={register} id={'name'} errors={errors} type='name'/>
            
            )}

            <Input label='Email address' register={register} id={'email'} errors={errors} type='email'/>
            <Input label='Password' register={register} id={'password'} errors={errors} type='password'/>
            <div>
                <Button 
                    disabled={isLoading}
                    fullWidth
                    type='submit'
                >
                    {variant==='LOGIN' ? 'Sign-in' : 'Register'}
                </Button>
            </div>
        </form>
        <div className='mt-6'>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300'/>

                   
                    
                </div>
                <div className='relative flex justify-center text-sm'>
                        <span className='bg-white px-2 text-gray-500'>
                            Or continue with
                        </span>
                    </div>
            </div>
                <div className='mt-6 flex gap-2'>
                   <AuthSocialButton icon={BsGithub } onClick={()=> socialAction('github')}/>
                   <AuthSocialButton icon={BsGoogle } onClick={()=> socialAction('google')}/>

                </div>
        </div>
            <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                <div className=''>
                    {variant=== 'LOGIN'? 'New to Trach App?': "Already registered?"}
                </div>
                <div
                    onClick={toggleVariant}
                    className='underline cursor-pointer'
                >
                 {variant=== 'LOGIN'?'Create an Account': "Login"}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthForm