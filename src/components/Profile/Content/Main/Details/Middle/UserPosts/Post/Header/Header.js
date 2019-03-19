import React from "react";

import {
  Creator as PostCreator,
  ElipsisBtn as OptionsBtn
} from "components/UI";

const Header = ({ mainProps, handleOptionsBtnClick, optionsBtnActive }) => {
  const {
    name: { first, last },
    picture: { thumbnail }
  } = mainProps.user;
  const { created, shareType, sharedFrom } = mainProps.post;

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
      <OptionsBtn
        handleOptionsBtnClick={handleOptionsBtnClick}
        optionsBtnActive={optionsBtnActive}
      />
    </div>
  );
};

export default Header;
