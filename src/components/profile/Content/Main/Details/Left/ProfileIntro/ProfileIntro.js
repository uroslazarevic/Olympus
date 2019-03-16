import React from "react";
import { connect } from "react-redux";
import { InfoBlock } from "components/UI";
import {
  ProfileContentMainDetailsLeftProfileIntroItem,
  ProfileContentMainDetailsLeftProfileIntroSocialNetworks
} from "components";

const ProfileIntro = props => {
  return (
    <div className="profile-intro">
      <InfoBlock name="Profile Intro">
        {props.details.details.map(item => {
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

function mapStateToProps({ user }) {
  return { details: user.mainInfo };
}

export default connect(
  mapStateToProps,
  null
)(ProfileIntro);
