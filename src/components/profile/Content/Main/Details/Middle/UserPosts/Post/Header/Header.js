import React from "react";

import {
  Creator as PostCreator,
  ElipsisBtn as OptionsBtn
} from "components/UI";

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
        creatorClass="post-creator"
      />
      <OptionsBtn />
    </div>
  );
};

export default Header;
