import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';


const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winsson Henry',
            country: 'Bangladesh',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Kim Bok Joo',
            country: 'Japan',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Lee Jong Suk',
            country: 'England',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        }

    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary font-bold'>Testimonial</h3>
                    <h1 className='text-2xl lg:text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-[192px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Reviews;