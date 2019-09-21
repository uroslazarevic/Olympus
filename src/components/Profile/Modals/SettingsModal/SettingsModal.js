import React, { useState, useEffect } from "react";

import { customHooks } from "utilis";
import { useMutation, useQuery } from "@apollo/react-hooks";
// Mutations
import { PROFILE_SETTINGS, FILE_UPLOAD } from "mutations/auth";
// Queries
import { GET_ME } from "queries/auth";
// Utilis
import { history } from "utilis";
// Components
import { Avatar as UserAvatar } from "components/UI";

import avatar from "../../../../imgs/avatar.png";

export const SettingsModal = ({ id }) => {
  const { loading, error, data } = useQuery(GET_ME, {
    variables: { id },
  });

  const [confirmed, setConfirmed] = useState(false);
  const [values, setValues] = useState({ base64Avatar: null, name: "", pseudonym: "" });
  const [setProfileSettings] = useMutation(PROFILE_SETTINGS);
  const [fileUpload] = useMutation(FILE_UPLOAD);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const base64Src = await toBase64(file);
    setValues({ base64Avatar: base64Src });
    await fileUpload({
      variables: { file, id },
      operationName: "fileUpload",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = values.name ? values.name : data.me.name;
      const pseudonym = values.pseudonym ? values.pseudonym : data.me.pseudonym;
      const response = await setProfileSettings({
        variables: { name, pseudonym, id },
        operationName: "setProfileSettings",
      });

      response.data.profileSettings && history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("DATA", values.name, values.pseudonym);
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const dbAvatar = data.me.avatar ? `data:image/jpeg;base64,${data.me.avatar}` : "";

  return (
    <div className="profile-settings-modal">
      <div className="content">
        <div className="header">
          <h5 className="modal-title">Personal settings</h5>
          <div className="profile-settings-image">
            <input onChange={uploadFile} className="upload-file" type="file" name="avatar" id="avatar" />
            <label className="label-upload-file" htmlFor="avatar">
              <span className="camera">
                <i className="fas fa-camera"></i>
              </span>
            </label>
            <UserAvatar
              imgSrc={values.base64Avatar ? values.base64Avatar : dbAvatar ? dbAvatar : avatar}
              className="avatar-profile-settings"
            />
          </div>
        </div>
        <div className="body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                defaultValue={data.me.name}
                onChange={({ target }) => setValues((prev) => ({ ...prev, name: target.value }))}
                placeholder="Enter name"
              />
              <small id="nameHelp" className="form-text text-muted">
                This name will be visible to your Olympus contacts.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="pseudonym">Pseudonym</label>
              <input
                defaultValue={data.me.pseudonym}
                type="text"
                className="form-control"
                id="pseudonym"
                name="pseudonym"
                placeholder="Enter pseudonym"
                onChange={({ target }) => setValues((prev) => ({ ...prev, pseudonym: target.value }))}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="verifyInfo"
                checked={confirmed}
                onChange={() => setConfirmed((prev) => !prev)}
              />
              <label className="form-check-label" htmlFor="verifyInfo">
                Confirm
              </label>
            </div>
            <button disabled={!confirmed} type="submit" className="btn save">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
