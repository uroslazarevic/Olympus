import React, { useState } from "react";

export const DeleteMsgModal = ({ onClickDelete, hideModal }) => {
  const [deleteFor, setDeleteFor] = useState("you");

  const onChange = (e) => {
    setDeleteFor(e.target.name);
  };

  return (
    <div class="delete-msg-modal">
      <div class="content">
        <div class="header">
          <h5 class="modal-title">Who do you want to remove this message for?</h5>
          <button onClick={hideModal} type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="body">
          <label>
            <input
              type="radio"
              value="everyone"
              name="everyone"
              onChange={onChange}
              checked={deleteFor === "everyone"}
            />
            Remove for Everyone
            <p>
              You'll permanently remove this message for all chat members. They can still see that you removed a
              message.
            </p>
          </label>
          <label>
            <input type="radio" value="you" name="you" onChange={onChange} checked={deleteFor === "you"} />
            Remove for You
            <p>This message will be removed for you. Other chat members will still be able to see it.</p>
          </label>
        </div>
        <div class="footer">
          <button onClick={hideModal} type="button" class="btn btn-secondary btn-sm cancel" data-dismiss="modal">
            Close
          </button>
          <button onClick={onClickDelete(deleteFor)} type="button" class="btn  btn-danger btn-sm delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
