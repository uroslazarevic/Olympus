import React from "react";
import { InfoBlock } from "components/UI";
import {
  ProfileContentMainDetailsLeftProfileIntroItem,
  ProfileContentMainDetailsLeftProfileIntroSocialNetworks
} from "components";

const ProfileIntro = ({ details }) => {
  return (
    <div className="profile-intro">
      <InfoBlock name="Profile Intro">
        {details.map(item => {
          return (
            <ProfileContentMainDetailsLeftProfileIntroItem
              key={item.id}
              item={item}
            />
          );
        })}
        <ProfileContentMainDetailsLeftProfileIntroSocialNetworks />
      </InfoBlock>
    </div>
  );
};

export default ProfileIntro;
