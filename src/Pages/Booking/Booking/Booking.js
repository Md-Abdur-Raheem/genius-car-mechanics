import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => [
        fetch(`https://warm-mountain-98988.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    ],[])
    return (
        <div>
            <h2>{service.name}</h2>
        </div>
    );
};

export default Booking;