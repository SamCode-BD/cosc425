import * as React from 'react';

export default function Form(){
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-bold '>Bone Database</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your username and password</p>
            <div className='mt-6'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        className='w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent'
                        placeholder='Enter your email'
                    />
                </div>
                <div className='mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        className='w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent'
                        placeholder='Enter your password'
                        type='password'
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input 
                            type="checkbox"
                            id='remember'
                        />
                        <label className="ml-2 font-medium text-base" for="remember">Remember this device</label>
                    </div>
                    <button className='font-medium text-base text-maroon active:scale-[.98] active:duration-75 hover:scale-[1.02] 
                    ease-in-out transition-all'>Forgot Password?</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all py-3 rounded-3xl 
                    bg-maroon hover:bg-maroon text-white text-lg font-medium'>
                        Sign In    
                    </button>
                    <button className='flex rounded-3xl py-3 border-2 border-gray-200 items-center justify-center gap-2 active:scale-[.98] 
                    active:duration-75 hover:scale-[1.02] ease-in-out transition-all'>
                        Sign in with SU account
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <button className='text-maroon text-base font-medium active:scale-[.98] active:duration-75 hover:scale-[1.02] 
                    ease-in-out transition-all'>Create Account</button>
                </div>
            </div>
        </div>
    )
}