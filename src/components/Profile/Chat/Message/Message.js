import React, { useState } from "react";
import { ElipsisBtn } from "components/UI";
import { ChatOptions } from "components";

export const ChatMessage = ({ msg, username, onEditMessage }) => {
  const [showOptions, setShowOptions] = useState(false);

  const onClickEdit = (msg) => {
    setShowOptions(false);
    onEditMessage(msg);
  };

  return (
    <div
      key={msg.id}
      className={`message ${msg.from === username ? "you" : msg.from === "admin" ? "admin" : "friend"} `}
    >
      <div className="msg-content">
        <div className="text">
          {msg.text}
          <ElipsisBtn
            handleOptionsBtnClick={() => setShowOptions((showOptions) => !showOptions)}
            optionsBtnActive={showOptions}
          />
        </div>
        <div className="date">{msg.date}</div>
        {showOptions && <ChatOptions onClickEdit={() => onClickEdit(msg)} />}
      </div>
    </div>
  );
};
