import React from "react";

// Components
import { Modal, SettingsModal } from "components";

export const Settings = ({ location }) => {
  console.log("PROPS", location.state.id);
  return (
    <div className="personal-settings">
      {
        <Modal>
          <SettingsModal id={location.state.id} />
        </Modal>
      }
    </div>
  );
};
