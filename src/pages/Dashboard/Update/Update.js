import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://ghoulish-web-04262.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);

    // update User
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedService = { ...service };
        updatedService.name = updatedName;
        setService(updatedService);
    }

    const handleCountryChange = e => {
        const updatedCountry = e.target.value;
        const updatedService = { ...service };
        updatedService.country = updatedCountry;
        setService(updatedService);
    }

    const handleImgUrlChange = e => {
        const updatedImg = e.target.value;
        const updatedService = { ...service };
        updatedService.img = updatedImg;
        setService(updatedService);
    }

    const handleDescribeChange = e => {
        const updatedDescribe = e.target.value;
        const updatedService = { ...service };
        updatedService.describe = updatedDescribe;
        setService(updatedService);
    }

    const handleUpdateService = e => {
        const url = `https://ghoulish-web-04262.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    setService({});
                }
            })
        e.preventDefault();
    }
    return (
        <div className='add-service'>
            <h2>Updated this document </h2>
            <form onSubmit={handleUpdateService}>
                <input onChange={handleNameChange} value={service.name || ''} type="text" /><br />
                <input onChange={handleCountryChange} value={service.country || ''} type="text" /><br />
                <input onChange={handleImgUrlChange} value={service.img || ''} type="text" /><br />
                <textarea onChange={handleDescribeChange} value={service.describe || ''} name="" id="" cols="30" rows="10"></textarea><br />
                <input type="submit" value="Updated this service" />
            </form>
        </div>
    );
};

export default Update;