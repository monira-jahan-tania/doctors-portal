import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div className="card-body flex items-center justify-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>No Slots Available</span>

                }</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</p>
                <div className="card-actions justify-center">

                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;