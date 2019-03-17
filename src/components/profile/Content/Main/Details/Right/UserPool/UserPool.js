import React from "react";

import { InfoBlock } from "components/UI";
import { ProfileContentMainDetailsRightUserPoolItem } from "components";

const UserPool = ({ pool, name }) => {
  return (
    <div className="user-pool">
      <InfoBlock name={`${name}'s Pool`}>
        <ul className="user-pool-list">
          {pool.map(poolItem => {
            return (
              <ProfileContentMainDetailsRightUserPoolItem
                key={poolItem.id}
                poolItem={poolItem}
              />
            );
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default UserPool;
