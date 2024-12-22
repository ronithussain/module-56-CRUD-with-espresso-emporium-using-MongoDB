import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-purple-100 border rounded-none p-4">
                <figure>
                    <img
                        src={photo} />
                </figure>
                <div className="flex w-full justify-between items-center">
                    <div className='space-y-1'>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical rounded-none space-y-2">
                            <button className="btn join-item text-blue-600">View</button>
                            <Link to={`/updateCoffee/${_id}`} className="btn join-item text-green-600">Edit</Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item text-red-600">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;