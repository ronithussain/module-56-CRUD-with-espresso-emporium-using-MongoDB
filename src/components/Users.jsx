import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUserData = useLoaderData();
    const [users, setUsers] = useState(loadedUserData)
    console.log(users)

    const handleDelete = (id) => {
        console.log('deleted this users', id);

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
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE',
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
                            const remaining = users.filter(user => user._id !== id)
                            setUsers(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div>
            Users: {users.length}
            <div className="overflow-x-auto px-24">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td className="">
                                    <div className="join join-horizontal rounded-none space-x-3  flex">


                                        <button
                                            className="btn join-item text-blue-600">Edit</button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn join-item text-red-600">Delete</button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;