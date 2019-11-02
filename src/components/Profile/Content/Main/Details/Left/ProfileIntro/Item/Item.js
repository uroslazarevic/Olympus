import React, { useState } from "react";
import _ from "lodash";
const dragImg = new Image(0, 0);
dragImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const Item = ({ item, setDraggableEle, resetDraggableEle }) => {
  const [draggable, setDraggable] = useState("false");

  const onDragStart = (e) => {
    console.log("DRAG START", e.nativeEvent);
    setDraggableEle();
    setDraggable(true);
    e.dataTransfer.setDragImage(dragImg, 0, 0);
  };

  const onDragEnd = (e) => {
    console.log("DRAG Stop", e);
    setDraggable(false);
    resetDraggableEle();
  };

  const onDrag = _.throttle((event) => {
    event.persist();
    console.log("DAA");
    console.log("event", event);
    console.log("DRAGGING", event.nativeEvent);
  }, 1000);

  return (
    <div
      // draggable
      // onDragStart={onDragStart}
      // onDragEnd={onDragEnd}
      // onDrag={(e) => onDrag(e)}
      className={`profile-intro-item ${draggable && "draggable"}`}
    >
      <div className="profile-intro-item-title">{item.topic}</div>
      <div className="profile-intro-item-description">{item.content}</div>
    </div>
  );
};

export default Item;
