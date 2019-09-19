import React, { useState } from "react";
import moment from "moment";
import { ElipsisBtn } from "components/UI";
import { ChatOptions, Modal, DeleteMsgModal } from "components";

export const ChatMessage = ({ msg, username, onEditMessage, onDeleteMessage }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onClickEdit = (msg) => {
    setShowOptions(false);
    onEditMessage(msg);
  };

  const onClickDelete = (deleteFor = "you") => (e) => {
    onDeleteMessage(msg, deleteFor);
    hideModal();
  };

  const hideModal = () => setShowModal(false);

  const displayModal = () => {
    setShowOptions(false);
    setShowModal(true);
  };

  const calculateDate = (msgDate) => {
    const oneDay = 3600 * 1000 * 24;
    const now = Date.now();
    const differenceInDays = Math.floor((now - msgDate) / oneDay);
    const date =
      differenceInDays >= 1
        ? moment(msgDate)
            .subtract(differenceInDays, "days")
            .calendar(null, {
              sameDay: "[Today], hh:mm a",
              nextDay: "[Tomorrow], hh:mm a",
              nextWeek: "dddd, hh:mm a",
              lastDay: "[Yesterday], hh:mm a",
              lastWeek: "[Last] dddd, hh:mm a",
              sameElse: "MMMM Do YYYY, hh:mm a",
            })
        : moment(msgDate).format("h:mm a");
    return date;
  };

  return (
    <div
      key={msg.id}
      className={`message ${msg.from === username ? "you" : msg.from === "admin" ? "admin" : "friend"} `}
    >
      {showModal && (
        <Modal>
          <DeleteMsgModal onClickDelete={onClickDelete} hideModal={hideModal} />
        </Modal>
      )}
      <div className="msg-content">
        <div className="text">
          {msg.text}
          <ElipsisBtn
            handleOptionsBtnClick={() => setShowOptions((showOptions) => !showOptions)}
            optionsBtnActive={showOptions}
          />
        </div>
        <div className="date">{calculateDate(msg.date)}</div>
        {showOptions && (
          <ChatOptions
            msgFromMe={msg.from === username}
            onClickEdit={() => onClickEdit(msg)}
            onClickDelete={displayModal}
          />
        )}
      </div>
    </div>
  );
};
