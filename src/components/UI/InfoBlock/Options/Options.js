import React from "react";

const Options = ({ selectOption, name }) => {
  return (
    <ul className="info-block-options">
      <li className="add-option option" onClick={() => selectOption("create")}>
        Add {name}
      </li>
      <li className="edit-option option" onClick={() => selectOption("update")}>
        Edit {name}
      </li>
      <li className="delete-option option" onClick={() => selectOption("delete")}>
        Delete {name}
      </li>
    </ul>
  );
};

export default Options;
