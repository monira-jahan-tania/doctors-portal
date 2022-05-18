import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate]);

    return (
        <div>
            <h1 className='text-2xl text-center text-secondary'>Available Appointments on: {format(date, 'PP')}.</h1>

            <div className='my-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;