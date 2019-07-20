import React from "react";
import { InfoBlock } from "components/UI";
import { PhotosItem } from "components";

const Photos = ({ photos }) => {
  return (
    <div className="profile-photos">
      <InfoBlock name="Last Photos">
        <ul className="profile-photos-list">
          {photos.map(photo => {
            return <PhotosItem key={photo.id} photo={photo} />;
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default Photos;
