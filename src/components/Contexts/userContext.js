import React from "react";

const user = {},
  chatRoomsData = {},
  actions = {},
  friends = [];

export default React.createContext({ user, friends, chatRoomsData, actions });
