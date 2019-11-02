import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BioFactTopic, BioFactContent, BioFact, CustomCheckbox, BioFactWrapper } from "./Styled";

export const BioFactItem = ({ bioFact, onUpdate, onDelete, action, updatedId }) => {
  const [checked, setChecked] = useState(false);

  const handleOnClick = () => {
    setChecked((prev) => !prev);
    action === "update" && onUpdate(updatedId === bioFact.id ? { id: bioFact.id, topic: "", content: "" } : bioFact);
    action === "delete" && onDelete(bioFact.id);
  };

  useEffect(() => {
    setChecked(false);
  }, [action]);

  return (
    <BioFactWrapper>
      <ThemeProvider
        theme={{
          selectedOnUpdate: action === "update" ? updatedId === bioFact.id : checked,
          updateAction: action === "update",
          bioDefaultWidth: "130px",
          bioDefaultHeight: "70px",
          bioActiveHeight: "100px",
          bioDefaultBG: "#f9fafd",
          bioActiveBG: "aliceblue",
          bioWidthOnUpdate: "250px",
          bioWidthOnDelete: "180px",
        }}
      >
        <BioFact onClick={handleOnClick}>
          <BioFactTopic className="biofact-topic">{bioFact.topic}</BioFactTopic>
          <BioFactContent className="biofact-description">{bioFact.content}</BioFactContent>
        </BioFact>
        {action !== "update" && (
          <CustomCheckbox>
            <input type="checkbox" checked={checked ? true : false} onChange={handleOnClick} />
            <span className="checkmark"></span>
          </CustomCheckbox>
        )}
      </ThemeProvider>
    </BioFactWrapper>
  );
};
