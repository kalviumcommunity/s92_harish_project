// src/components/UserCard.jsx
import React from "react";
import "./UserCard.css";

function UserCard({ name, role, avatarUrl }) {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="user-card__avatar" />
      <div className="user-card__info">
        <h3 className="user-card__name">{name}</h3>
        <p className="user-card__role">{role}</p>
      </div>
    </div>
  );
}

export default UserCard;