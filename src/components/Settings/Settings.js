import React from "react";

import backgroundImg from "./../../imgs/settings.png";

// Components
import { Modal, SettingsModal } from "components";

export const Settings = ({ location }) => {
  return (
    <div style={{ backgroundImage: `url("${backgroundImg}")` }} className="personal-settings">
      <Modal>
        <SettingsModal id={location.state.id} />
      </Modal>
    </div>
  );
};
