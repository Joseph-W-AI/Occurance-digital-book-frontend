import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.scss';
import UserMenuItem from './UserMenuItem';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Retrieve token from local storage
                const token = localStorage.getItem('token');

                if (!token) {
                    // Handle case where token is not available
                    console.error('Token not found in local storage');
                    return;
                }

                // Use the retrieved token in the Authorization header
                const response = await axios.get('http://127.0.0.1:5000/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response.data);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className='directsms'>
            <div className="writeSms">
                <h4>Available users</h4>
                <button className='createMsgBtn'>+</button>
            </div>
            <div className="closeContact">
                <UserMenuItem users={users} />
            </div>
        </div>
    );
};

export default Users;
