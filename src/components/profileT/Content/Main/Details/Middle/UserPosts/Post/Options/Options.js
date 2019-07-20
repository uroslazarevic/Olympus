import React from "react";

const Options = () => {
  return (
    <ul className="user-post-options">
      <li className="edit-option option">Edit Post</li>
      <li className="delete-option option">Delete Post</li>
      <li className="notification-option option">Turn Off Notifications</li>
      <li className="more-option option">Select as Featured</li>
    </ul>
  );
};

export default Options;
