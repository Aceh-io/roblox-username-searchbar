import React from "react";
export default function SearchBox({ user: tmp }) {
  if (!tmp || tmp.code) {
    return;
  }
  const user = tmp.user.user;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.roblox.com/users/${tmp.user.id}/profile`}
    >
      <p>Display Name: {user.displayName}</p>
      <p>id: {tmp.user.id}</p>
      <img
        src={`https://www.roblox.com/headshot-thumbnail/image?userId=${tmp.user.id}&width=420&height=420&format=png`}
      />
      <p>Click to open account link.</p>
    </a>
  );
}
