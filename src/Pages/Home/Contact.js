import React from 'react';
import contact from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div style={{
            background: `url(${contact})`
        }}
            className='mt-28 py-12 flex flex-col justify-center items-center'>
            <h3 className='text-primary text-xl text-center font-bold'>Contact Us</h3>
            <h1 className='text-white text-2xl text-center lg:text-4xl'>Stay connected with us</h1>
            <form action="" className='flex flex-col justify-center items-center p-5'>
                <input className='mt-2 p-2 w-[200px] md:w-[300px] lg:w-[393px] rounded outline-0' type="text" name="name" placeholder='Enter Your Name' />
                <input className='mt-2 p-2 w-[200px] md:w-[300px]  lg:w-[393px] rounded outline-0' type="email" name='email' placeholder='Enter Your Email' />
                <textarea className='mt-2 p-2 w-[200px] md:w-[300px] lg:w-[393px] rounded h-[136px] outline-0' name="description" id="" placeholder='Description'></textarea>
            </form>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default Contact;