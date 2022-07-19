import React from 'react';
export default function SearchBox({ user: tmp }) {
    const user = tmp.user
    return (
        <a target="_blank" rel="noopener noreferrer" href={`https://www.roblox.com/users/${tmp.id}/profile`}>
            <p>Name: {user.displayName}</p>
            <p>id: {tmp.id}</p>


        </a>
    )
}