import React from "react";

const user = {},
  chatRoomsData = {},
  actions = {},
  friends = [],
  posts = [];

export default React.createContext({ user, friends, chatRoomsData, actions, posts });
