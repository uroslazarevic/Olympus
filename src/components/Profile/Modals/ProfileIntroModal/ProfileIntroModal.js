import React, { useState } from "react";
import _ from "lodash";
import {
  StyledProfileIntroModal,
  ModalHeaderTitle,
  CloseButton,
  BioFactsList,
  ModalBody,
  ModalBodyTop,
  Select,
  Button,
} from "./Styled";

// Components
import { BioFactItem } from "./BioFactItem";

// Apollo
import { useMutation } from "@apollo/react-hooks";
// Mutations
import { CREATE_BIOFACT, DELETE_BIOFACTS, UPDATE_BIOFACT } from "mutations/profile";
// Queries
import { PROFILE_DATA } from "queries/profile";

const defaultValues = { topic: "", content: "" };

export const ProfileIntroModal = ({ hideModal, defaultAction, data }) => {
  const [bioFactValues, setBioFactValues] = useState(defaultValues);
  const [updatedId, setUpdatedId] = useState("");
  const [action, setAction] = useState(defaultAction);
  const [deleteIdsArray, updateDeleteIdsArr] = useState([]);

  const [createBioFact] = useMutation(CREATE_BIOFACT);
  const [deleteBioFacts] = useMutation(DELETE_BIOFACTS);
  const [updateBioFact] = useMutation(UPDATE_BIOFACT);

  const onSubmit = async () => {
    if (action === "create") {
      createBioFact({ variables: bioFactValues, refetchQueries: [{ query: PROFILE_DATA }] });
      setBioFactValues(defaultValues);
    }

    if (action === "delete") {
      await deleteBioFacts({ variables: { ids: deleteIdsArray }, refetchQueries: [{ query: PROFILE_DATA }] });
      updateDeleteIdsArr([]);
    }

    if (action === "update") {
      await updateBioFact({
        variables: { id: updatedId, ...bioFactValues },
      });
      setUpdatedId("");
      setBioFactValues(defaultValues);
    }
  };

  const onSelect = (e) => {
    const actionValue = e.target.value;
    actionValue === "update" && updateDeleteIdsArr([]);
    actionValue === "delete" && setUpdatedId("");
    setBioFactValues(defaultValues);
    setAction(actionValue);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setBioFactValues((prev) => ({ ...prev, [name]: value }));
  };

  const onUpdate = (bioFact) => {
    setUpdatedId(!bioFact.topic ? "" : bioFact.id);
    setBioFactValues({ topic: bioFact.topic, content: bioFact.content });
  };

  const onDelete = (bioFactId) => {
    // Unassociate bioFactId when BioFactItem is deselected
    const found = deleteIdsArray.find((id) => id === bioFactId);
    if (found) return updateDeleteIdsArr(deleteIdsArray.filter((id) => id !== bioFactId));
    // Update deleteIdsArray with selected BioFactItem id
    updateDeleteIdsArr([...deleteIdsArray, bioFactId]);
  };

  return (
    <StyledProfileIntroModal>
      <ModalHeaderTitle>
        Profile Intro <CloseButton onClick={hideModal}>&times;</CloseButton>
      </ModalHeaderTitle>
      <ModalBody>
        <ModalBodyTop>
          {action !== "create" &&
            _.chunk(data, 3).map((dataChunk, i) => {
              return (
                <BioFactsList key={i} updateAction={action === "update"}>
                  {dataChunk.map((bioFact, i) => {
                    return (
                      <BioFactItem
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        action={action}
                        bioFact={bioFact}
                        updatedId={updatedId}
                        key={i}
                      />
                    );
                  })}
                </BioFactsList>
              );
            })}
          <Select defaultValue={defaultAction} onChange={onSelect}>
            <option value="create">Create</option>
            <option value="update">Update</option>
            <option value="delete">Delete</option>
          </Select>
        </ModalBodyTop>
        {action !== "delete" && (
          <form onSubmit={(e) => e.preventDefault()} className="needs-validation">
            <div className="form-group">
              <label htmlFor="topic">Topic</label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="topic"
                name="topic"
                value={bioFactValues.topic}
                onChange={onChange}
                placeholder="What is your topic..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                value={bioFactValues.content}
                onChange={onChange}
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Write topic content..."
                required
              />
            </div>
          </form>
        )}
        {action === "create" && (
          <Button
            disabled={!bioFactValues.topic || !bioFactValues.content}
            onClick={onSubmit}
            className="btn btn-primary"
          >
            Create
          </Button>
        )}
        {action === "delete" && (
          <Button disabled={deleteIdsArray.length === 0} onClick={onSubmit} className="btn btn-danger">
            Delete
          </Button>
        )}
        {action === "update" && (
          <Button disabled={!updatedId} onClick={onSubmit} className="btn btn-warning">
            Update
          </Button>
        )}
      </ModalBody>
    </StyledProfileIntroModal>
  );
};

/* <UploadImageWrapper>
            <UploadFileInput
              required
              onChange={fileUpload}
              className="upload-file"
              type="file"
              name="avatar"
              id="avatar"
            />
            <label htmlFor="avatar">
              <SpanCamera>
                <CameraImage hoverColor="yellow"></CameraImage>
              </SpanCamera>
            </label>
          </UploadImageWrapper> */

// const uploadFile = async (e) => {
//   const file = e.target.files[0];
//   const base64Src = await toBase64(file);
//   setBioFactValues({ base64Avatar: base64Src });
// };
