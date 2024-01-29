import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.scss';
import UserMenuItem from './UserMenuItem';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/users');
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
