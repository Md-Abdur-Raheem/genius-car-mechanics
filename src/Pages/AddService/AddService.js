import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data?.insertedId) {
                alert('Service added successfully')
                }
                else {
                    alert('Oops! product did not add')
                }
            })
            .catch(error => console.log(error))
        reset();
    }

    // const nameRef = useRef('');
    // const priceRef = useRef('');
    // const handleAddService = (event) => {
    //     event.preventDefault();
    //     const name = nameRef.current.value;
    //     const price = priceRef.current.value;
    //     const newService = { name, price };
        
    //         fetch('http://localhost:5000/services', {
    //             method: "POST",
    //             headers: { 'content-type': 'application/json' },
    //             body: JSON.stringify(newService)
    //         })
    //         .then(res => res.json())
    //     .then(data => console.log(data))
    // }
   
    return (
        <div>
            <h2>Add a service</h2><br />
            {/* <form onSubmit={handleAddService}>
                <input type="text" placeholder="Product name" ref={nameRef} />
                <br /><br />
                <input type="text" placeholder="Price" ref={priceRef}/>
                <br /><br />
                <input type="submit" value="Add" />
            </form> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} /> <br /><br />
                <textarea col="30" row="20" placeholder="Description" {...register("Description")} /> <br /><br />
                <input placeholder="Price" type="number" {...register("price")} /> <br /><br />
                <input placeholder="Image" {...register("img")} /> <br /><br />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;