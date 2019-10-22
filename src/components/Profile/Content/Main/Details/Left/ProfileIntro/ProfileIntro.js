import React from "react";
import { InfoBlock } from "components/UI";
import { ProfileIntroItem, ProfileIntroSocialNetworks } from "components";

const ProfileIntro = ({ profileIntro }) => {
  return (
    <div className="profile-intro">
      <InfoBlock name="Profile Intro">
        {profileIntro.map((item) => {
          return <ProfileIntroItem key={item.id} item={item} />;
        })}
        <ProfileIntroSocialNetworks />
      </InfoBlock>
    </div>
  );
};

export default ProfileIntro;
