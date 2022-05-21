import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useNavigation } from 'react-day-picker';
import useToken from '../../hooks/useToken'

const SignUp = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user1 || user2);

    const navigate = useNavigate();
    let errorMessage;

    if (loading1 || loading2) {
        return <Loading></Loading>
    }

    if (error1 || error2 || updateError) {
        errorMessage = <p className='text-red-500'><small>{error1?.message || error2?.message}||{updateError?.message}</small> </p>
    }
    if (token) {
        navigate('/appointment');
    }

    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // navigate('/appointment')
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-4xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must contain 6 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Sign up' />
                    </form>
                    <p><small>Already have an account? <Link className='text-primary' to='/login'>Please Login.</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Countinue With Google</button>


                </div>
            </div>
        </div>
    );
};

export default SignUp;