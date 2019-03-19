import React from "react";

import { Btn as SocialNetworkBtn } from "components/UI";

const SocialNetworks = () => {
  return (
    <div className="social-networks">
      <div className="social-networks-header">Other Social Networks</div>
      <div className="social-networks-body">
        <SocialNetworkBtn
          name="fb-profile-link"
          icon={<i className="fab fa-facebook-f" />}
          text="Facebook"
          btnClass="fb-btn"
        />
        <SocialNetworkBtn
          name="tw-profile-link"
          icon={<i className="fab fa-twitter" />}
          text="Login with Twitter"
          btnClass="tw-btn"
        />
        <SocialNetworkBtn
          name="dribbble-profile-link"
          icon={<i className="fab fa-dribbble" />}
          text="Dribbble"
          btnClass="dribbble-btn"
        />
      </div>
    </div>
  );
};

export default SocialNetworks;
