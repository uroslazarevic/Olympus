import React from "react";

export const ChatOptions = ({ onClickEdit, onClickDelete, msgFromMe }) => {
  return (
    <ul className="chat-comment-options">
      {msgFromMe && (
        <li onClick={onClickEdit} className="edit-option option">
          Edit
        </li>
      )}
      <li onClick={onClickDelete} className="delete-option option">
        Delete
      </li>
    </ul>
  );
};

// export Options;
