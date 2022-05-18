import React from 'react';
import treatment from '../../assets/images/treatment.png'
const ExceptionCare = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">

                <img className='max-w-sm rounded-lg shadow-2xl' src={treatment} />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil nesciunt libero eos quaerat suscipit quos quae earum aut sunt, explicabo harum. Totam quia enim ipsa eligendi, velit assumenda beatae!</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionCare;