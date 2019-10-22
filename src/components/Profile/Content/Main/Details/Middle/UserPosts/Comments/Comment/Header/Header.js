import React from "react";

import { Creator as CommentCreator, ElipsisBtn as OptionsBtn } from "components/UI";

const Header = ({ commentator, handleOptionsBtnClick, optionsBtnActive }) => {
  const { name, avatar, createdAt } = commentator;

  return (
    <div className="comment-header">
      <CommentCreator
        item={{
          src: `data:image/jpeg;base64,${avatar}`,
          fullname: name,
          created: createdAt,
        }}
        creatorClass="comment-creator"
      />
      <OptionsBtn handleOptionsBtnClick={handleOptionsBtnClick} optionsBtnActive={optionsBtnActive} />
    </div>
  );
};

export default Header;
