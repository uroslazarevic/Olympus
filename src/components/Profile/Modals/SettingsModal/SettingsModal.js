import React, { useState } from "react";

// Apollo
import { useMutation, useQuery } from "@apollo/react-hooks";
// Mutations
import { PROFILE_SETTINGS, FILE_UPLOAD } from "mutations/auth";
// Queries
import { GET_SETTINGS } from "queries/auth";
// Utilis
import { history } from "utilis";
// Components
import { Avatar as UserAvatar } from "components/UI";
// Data
import avatar from "imgs/avatar.png";
import { countryList } from "apis/index";

export const SettingsModal = ({ id }) => {
  const { loading, error, data, refetch } = useQuery(GET_SETTINGS, {
    notifyOnNetworkStatusChange: false,
    variables: { id },
  });

  const [countryData, setCountryData] = useState({ list: [], currentFocus: -1 });
  const [confirmed, setConfirmed] = useState(false);
  const [showCountryList, setShowCountryList] = useState(false);
  const [values, setValues] = useState({ base64Avatar: null, name: "", pseudonym: "", city: "", country: "" });
  const [setProfileSettings] = useMutation(PROFILE_SETTINGS);
  const [fileUpload] = useMutation(FILE_UPLOAD);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = values.name ? values.name : data.getProfileSettings.name;
    const pseudonym = values.pseudonym ? values.pseudonym : data.getProfileSettings.pseudonym;
    const city = values.city ? values.city : data.getProfileSettings.city;
    const country = values.country ? values.country : data.getProfileSettings.country;
    const ProfileSettingsInput = {
      name,
      pseudonym,
      city,
      country,
      id,
    };
    try {
      await setProfileSettings({
        variables: { settings: ProfileSettingsInput },
        operationName: "setProfileSettings",
      });
      // Refetch data due to redirect
      await refetch();
      if (localStorage.getItem("refreshToken")) {
        return history.push("/profile");
      }
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const base64Src = await toBase64(file);
    setValues({ base64Avatar: base64Src });
    await fileUpload({
      variables: { file, id },
      operationName: "fileUpload",
    });
  };

  /*execute a function presses a key on the keyboard:*/
  const onCountryInputChange = (e) => {
    const { name, value: country } = e.target;
    // Update country value state
    setValues((prev) => ({ ...prev, [name]: country }));
    // Prepare country list for rendering
    const newCountryList = countryList.reduce((acc, c) => {
      if (c.substr(0, country.length).toUpperCase() === country.toUpperCase()) {
        const bold = (
          <span>
            <strong>{c.substr(0, country.length)}</strong>
            {c.substr(country.length)}
          </span>
        );
        acc.push(bold);
      }
      return acc;
    }, []);
    // Update country list data for rendering
    setCountryData((prev) => ({ ...prev, list: newCountryList }));
    // Display country list depending on input value length
    e.target.value.length === 0 ? setShowCountryList(false) : setShowCountryList(true);
  };

  const selectCountry = (country) => {
    const [element, textTail] = country.props.children;
    const textHead = element.props.children;
    setValues((prev) => ({ ...prev, country: textHead + textTail }));
    setShowCountryList(false);
  };

  const onKeyCombo = (e) => {
    let currentFocus = countryData.currentFocus;
    if (e.keyCode === 40) {
      currentFocus++;
      /*If the arrow DOWN key is pressed, increase the currentFocus variable:*/
      /*and and make the current item more visible:*/
      setCountryData((prev) => ({ ...prev, currentFocus }));
      if (currentFocus >= countryData.list.length) setCountryData((prev) => ({ ...prev, currentFocus: 0 }));
    } else if (e.keyCode === 38) {
      currentFocus--;
      /*If the arrow UP key is pressed, decrease the currentFocus variable:*/
      /*and and make the current item more visible:*/
      setCountryData((prev) => ({ ...prev, currentFocus }));
      if (currentFocus < 0) setCountryData((prev) => ({ ...prev, currentFocus: countryData.list.length - 1 }));
    } else if (e.keyCode === 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        const country = countryData.list[currentFocus];
        selectCountry(country);
        /*and simulate a click on the "active" item:*/
        // if (x) x[currentFocus].click();
      }
    }
  };

  const onChange = ({ target }) => {
    setValues((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const renderCountryList = () => {
    if (!showCountryList) return null;
    return (
      <ul className="country-list">
        {countryData.list.map((c, i) => {
          return (
            <li
              className={`country ${countryData.currentFocus === i ? "autocomplete-active" : ""}`}
              onClick={() => selectCountry(c)}
              key={i}
            >
              {c}
            </li>
          );
        })}
      </ul>
    );
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const dbAvatar = data.getProfileSettings.avatar ? `data:image/jpeg;base64,${data.getProfileSettings.avatar}` : "";

  return (
    <div className="profile-settings-modal">
      <div className="content">
        <div className="header">
          <h5 className="modal-title">Personal settings</h5>
          <div className="profile-settings-image">
            <input required onChange={uploadFile} className="upload-file" type="file" name="avatar" id="avatar" />
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
          <form className="needs-validation" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="name"
                name="name"
                defaultValue={data.getProfileSettings.name}
                onChange={onChange}
                placeholder="Enter name"
                required
              />
              <small id="nameHelp" className="form-text text-muted">
                This name will be visible to your Olympus contacts.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="pseudonym">Pseudonym</label>
              <input
                autoComplete="off"
                defaultValue={data.getProfileSettings.pseudonym}
                type="text"
                className="form-control"
                id="pseudonym"
                name="pseudonym"
                placeholder="Enter pseudonym"
                onChange={({ target }) => setValues((prev) => ({ ...prev, pseudonym: target.value }))}
                required
              />
            </div>

            <div className="form-row">
              <div className="col">
                <label htmlFor="city">City</label>
                <input
                  defaultValue={data.getProfileSettings.city}
                  name="city"
                  onChange={onChange}
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="City..."
                  required
                />
              </div>
              <div className="col">
                <label name="country" htmlFor="country">
                  Country
                </label>
                {!values.country ? (
                  <input
                    defaultValue={data.getProfileSettings.country}
                    autoComplete="off"
                    name="country"
                    onChange={onCountryInputChange}
                    type="text"
                    className="form-control"
                  />
                ) : (
                  <input
                    defaultValue={data.getProfileSettings.country}
                    value={values.country}
                    autoComplete="off"
                    name="country"
                    onChange={onCountryInputChange}
                    onKeyDown={onKeyCombo}
                    type="text"
                    className="form-control"
                    placeholder="Country..."
                    required
                  />
                )}
                {renderCountryList()}
              </div>
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
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
