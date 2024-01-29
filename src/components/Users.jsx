import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.scss';
import UserMenuItem from './UserMenuItem';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/users', {
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.yQ0a3wDcLLSlckbZowXTgM3gjsSs8uHhhuFKJ02RXvg', 
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        fetchUsers();
    }, []);

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