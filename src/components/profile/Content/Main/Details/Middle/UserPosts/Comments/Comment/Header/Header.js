import React from "react";

import {
  Creator as CommentCreator,
  ElipsisBtn as OptionsBtn
} from "components/UI";

const Header = ({ commentator, handleOptionsBtnClick, optionsBtnActive }) => {
  const { name, src, created } = commentator;

  return (
    <div className="comment-header">
      <CommentCreator
        item={{
          src,
          fullname: name,
          created
        }}
        creatorClass="comment-creator"
      />
      <OptionsBtn
        handleOptionsBtnClick={handleOptionsBtnClick}
        optionsBtnActive={optionsBtnActive}
      />
    </div>
  );
};

export default Header;
