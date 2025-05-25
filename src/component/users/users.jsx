import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/user';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1>Users {users.length}</h1>
            <h2>all users are here</h2>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;