import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const newCoffee = {name, quantity, supplier, taste, category, details, photo};
    
            console.log(newCoffee)
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newCoffee)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Coffee successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
        }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <form onSubmit={handleUpdateCoffee}>
                <h3 className='text-3xl font-extrabold mb-6'>Update Coffee</h3>
                {/* from name and available row */}
                <div className='flex mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label-text'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="name" defaultValue={name} id="" placeholder='Coffee Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label-text'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="quantity" defaultValue={quantity} id="" placeholder='Available Quantity' className='input input-bordered w-full ' />
                        </label>
                    </div>
                </div>

                {/* from supplier and taste row */}
                <div className='flex mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label-text'>
                            <span className='label-text'>Supplier Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="supplier" defaultValue={supplier} id="" placeholder='Supplier Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label-text'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="taste" defaultValue={taste} id="" placeholder='Available Quantity' className='input input-bordered w-full ' />
                        </label>
                    </div>
                </div>

                {/* from category and details row */}
                <div className='flex mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label-text'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="category" defaultValue={category} id="" placeholder='Coffee Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label-text'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="details" defaultValue={details} id="" placeholder='Details' className='input input-bordered w-full ' />
                        </label>
                    </div>
                </div>

                {/* from Photo url row */}
                <div className='flex mb-6'>
                    <div className='form-control w-full'>
                        <label className='label-text'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="photo" defaultValue={photo} id="" placeholder='Photo URL' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* submit button */}
                <input className="btn btn-block bg-gray-600 text-white/80" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;