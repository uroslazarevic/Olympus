import React, { useState } from "react";
import { InfoBlock } from "components/UI";
import { ProfileIntroItem, ProfileIntroSocialNetworks, ProfileIntroModal } from "components";

const ProfileIntro = ({ profileIntro }) => {
  const [bioList, setBioList] = useState(profileIntro);
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [draggableEle, setDraggableEle] = useState("");

  // const resetDraggableEle = () => setDraggableEle("");

  return (
    <div className="profile-intro">
      <InfoBlock name="Profile Intro" infoBlockModal={<ProfileIntroModal data={profileIntro} />}>
        {/* draggableEle && (
          <div
            style={{ position: "fixed", top: 0, left: 0 }}
            className={`profile-intro-item ${draggableEle && "draggableEle"}`}
          >
            <div className="profile-intro-item-title">{draggableEle.topic}</div>
            <div className="profile-intro-item-description">{draggableEle.content}</div>
          </div>
        ) */}
        {bioList.map((item) => {
          return (
            <ProfileIntroItem
              // resetDraggableEle={resetDraggableEle}
              // setDraggableEle={() => setDraggableEle(item)}
              // setPosition={setPosition}
              key={item.id}
              item={item}
            />
          );
        })}
        <ProfileIntroSocialNetworks />
      </InfoBlock>
    </div>
  );
};

export default ProfileIntro;
