import React from "react";

export const ChatOptions = ({ onClickEdit }) => {
  return (
    <ul className="chat-comment-options">
      <li onClick={onClickEdit} className="edit-option option">
        Edit
      </li>
      <li className="delete-option option">Delete</li>
    </ul>
  );
};

// export Options;