import React from "react";

import {
  Creator as CommentCreator,
  ElipsisBtn as OptionsBtn
} from "components/UI";

const Header = ({ commentator }) => {
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
      <OptionsBtn />
    </div>
  );
};

export default Header;
