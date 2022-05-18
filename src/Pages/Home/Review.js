import React from 'react';

const Review = ({ review }) => {
    const { img, name, country, description } = review;
    return (
        <div className=" bg-base-100 shadow-xl px-12">

            <p>{description}</p>
            <div className='flex justify-start items-center py-5'>
                <img className='border-primary border-2 rounded-full' src={img} alt="" />
                <div className='px-5'>
                    <h2 className="card-title">{name}</h2>
                    <h3>{country}</h3>
                </div>
            </div>

        </div>
    );
};

export default Review;