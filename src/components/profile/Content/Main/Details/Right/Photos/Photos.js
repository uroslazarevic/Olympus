import React from "react";
import { InfoBlock } from "components/UI";
import { ProfileContentMainDetailsRightPhotosItem } from "components";

const Photos = ({ photos }) => {
  return (
    <div className="profile-photos">
      <InfoBlock name="Last Photos">
        <ul className="profile-photos-list">
          {photos.map(photo => {
            return (
              <ProfileContentMainDetailsRightPhotosItem
                key={photo.id}
                photo={photo}
              />
            );
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default Photos;
