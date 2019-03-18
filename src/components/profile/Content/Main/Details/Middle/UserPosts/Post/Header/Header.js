import React from "react";

import { PostCreator } from "components";
import { ElipsisBtn as OptionsBtn } from "components/UI";

const Header = ({ props }) => {
  const {
    name: { first, last },
    picture: { thumbnail }
  } = props.user;
  const { created, shareType, sharedFrom } = props.post;

  return (
    <div className="post-header">
      <PostCreator
        item={{
          src: thumbnail,
          fullname: `${first} ${last}`,
          created,
          shareType,
          sharedFrom
        }}
      />
      <OptionsBtn />
    </div>
  );
};

export default Header;
