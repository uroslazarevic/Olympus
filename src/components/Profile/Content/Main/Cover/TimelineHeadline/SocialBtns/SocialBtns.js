import React from "react";

import { SocialBtn } from "components/UI";

const SocialBtns = () => {
  return (
    <div className="social-btns">
      <SocialBtn
        icon={<i className="fas fa-american-sign-language-interpreting" />}
        className={"new-friend"}
      />
      <SocialBtn
        icon={<i className="fab fa-artstation" />}
        className={"new-message"}
      />
      <SocialBtn
        icon={<i className="fab fa-firstdraft" />}
        className={"new-something"}
      />
    </div>
  );
};

export default SocialBtns;
