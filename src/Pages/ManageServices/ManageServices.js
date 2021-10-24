import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [isdelete, setIsDelete] = useState(false);

    useEffect(() => [
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    ], [isdelete])

    const handleClick = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsDelete(true);
            })
    }
    return (
        <div>
            <h2>Manage services</h2>
            <br />
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name} <button onClick={() => { handleClick(service._id) }}>X</button></h3>
                    <br />
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;