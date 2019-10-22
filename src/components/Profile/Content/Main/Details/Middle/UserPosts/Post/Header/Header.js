import React from "react";

import { Creator as PostCreator, ElipsisBtn as OptionsBtn } from "components/UI";

const Header = ({ mainProps, handleOptionsBtnClick, optionsBtnActive }) => {
  const { name, avatar } = mainProps.user.profileSettings;
  const { createdAt, type, author = null } = mainProps.post;

  return (
    <div className="post-header">
      <PostCreator
        item={{
          src: `data:image/jpeg;base64,${avatar}`,
          fullname: name,
          created: createdAt,
          type,
          author,
        }}
        creatorClass="post-creator"
      />
      <OptionsBtn handleOptionsBtnClick={handleOptionsBtnClick} optionsBtnActive={optionsBtnActive} />
    </div>
  );
};

export default Header;
