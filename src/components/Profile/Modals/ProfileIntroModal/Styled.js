import styled, { keyframes } from "styled-components";
import { Camera } from "styled-icons/boxicons-regular/Camera";

export const StyledProfileIntroModal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 650px;
  width: 650px;
  min-width: 450px;
`;

export const CloseButton = styled.span`
  font-family: "Times New Roman", Times, serif;
  right: 0px;
  position: absolute;
  font-weight: bold;
  color: #ef8989;
  display: flex;
  top: 0;
  line-height: 30px;
  font-size: 35px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #f97272;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalBodyTop = styled.div`
  position: relative;
  grid-column-gap: 10px;
  display: grid;
`;

export const Button = styled.button`
  width 120px;
  margin: 0 auto;
  color:#fff;
  cursor:pointer;
`;

export const ModalHeaderTitle = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  font-family: serif;
  position: relative;
  color: #ef8989;
  font-size: 25px;
`;

export const UploadImageWrapper = styled.div`
  position: relative;
`;

export const UploadFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const SpanCamera = styled.span`
  position: absolute;
  top: 60%;
  font-size: 20px;
  right: 204px;
  text-align: center;
  transform: translate(-50%, 0);
  cursor: pointer;
`;

export const CameraImage = styled(Camera)`
  background: #000;
  padding: 6px;
  color: red;
  height: 30px;
  border-radius: 100%;
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export const BioFactWrapper = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BioFactsList = styled.ul`
  width: 540px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: ${({ updateAction }) => (updateAction ? "115px" : "125px")};
  align-items: center;
`;

export const BioFact = styled.div`
  overflow:hidden;
  cursor:pointer;
  border: 1px solid #ced4da;
  padding: 5px
  border-radius: 4px;
  color: rebeccapurple;
  background: ${(props) => (props.theme.selectedOnUpdate ? props.theme.bioActiveBG : props.theme.bioDefaultBG)};
  height: ${(props) => (props.theme.selectedOnUpdate ? props.theme.bioActiveHeight : props.theme.bioDefaultHeight)};
  width: ${(props) =>
    props.theme.selectedOnUpdate
      ? props.theme.updateAction
        ? props.theme.bioWidthOnUpdate
        : props.theme.bioWidthOnDelete
      : props.theme.bioDefaultWidth};
  transition: height 0.2s linear 0.2s, width 0.2s linear;
  
  &:hover {
    background: aliceblue;

  .biofact-topic {
      color: orangered;
    }

    .biofact-description {
      color #000;
      opacity:0.8;
    }
  }
`;
export const BioFactTopic = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => (props.theme.selectedOnUpdate ? "orangered" : "#000")};
`;

export const BioFactContent = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-overflow: ${(props) => (props.theme.selectedOnUpdate ? "initial" : "ellipsis")};
  white-space: ${(props) => (props.theme.selectedOnUpdate ? "pre-wrap" : "nowrap")};
  width: 90%;
  height: 75px;
  margin: 0 auto;
  font-size: 15px;
  text-align: center;
  color: ${(props) => (props.theme.selectedOnUpdate ? "#000" : "#969494")};
  overflow-y: scroll;
`;

export const Select = styled.select`
  position:absolute;
  right 0px;
  height: 30px;
  background: #ef8989;
  color: #fff;
  border: 1px solid orangered;
  margin-left: auto;

  option {
    background: #ef8989;
    color: #fff;
  }
`;

export const CustomCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: ${(props) =>
    props.theme.selectedOnUpdate
      ? props.theme.updateAction
        ? props.theme.bioWidthOnUpdate
        : props.theme.bioWidthOnDelete
      : props.theme.bioDefaultWidth};
  transition: width 0.2s ease-in;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }

  :hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: orangered;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

// .profile-settings-modal {

//   .content {
//     .header {
//       .profile-settings-image {

//         label.label-upload-file {
//           span.camera {
//             position: absolute;
//             top: 60%;
//             font-size: 20px;
//             right: 204px;
//             text-align: center;
//             transform: translate(-50%, 0);
//             cursor: pointer;

//             i.fa-camera {
//               font-size: 19px;
//               line-height: 20px;
//               background: $mainColor;
//               padding: 6px;
//               color: #fff;
//               border-radius: 100%;
//             }
//           }
//           &:hover ~ .avatar-profile-settings {
//             box-shadow: $boxShadowColor;
//           }
//         }

//         .img-avatar.avatar-profile-settings {
//           height: 160px;
//           width: 160px;
//           margin: 0 auto;
//           position: initial;
//           border-radius: 100%;
//         }
//       }
//     }

//     .body {
//       form {
//         display: flex;
//         flex-direction: column;
//         .form-group,
//         .form-row {
//           .col {
//             margin-bottom: 1rem;
//           }

//           .col:last-child {
//             position: relative;
//           }

//           label {
//             color: $mainColor;
//           }

//           input {
//             border-color: $subColor;
//             font-size: 14px;
//             &:focus {
//               box-shadow: $boxShadowColor;
//               border-color: $subColor;
//             }
//           }

//           small {
//             color: $subColor !important;
//           }
//         }

//         button.save {
//           background: $mainColor;
//           &:hover {
//             background: $mainColor;
//           }
//         }
//         button.save {
//           color: #fff;
//           margin-left: auto;

//           &:hover {
//             box-shadow: $boxShadowColor;
//           }

//           &:disabled {
//             box-shadow: initial;
//           }
//         }
//       }
//     }
//   }
// }

// .country-list {
//   border: 1px solid #ccc;
//   border-top: initial;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   overflow-y: scroll;
//   position: absolute;
//   width: 300px;
//   max-height: 150px;
//   z-index: 1;
//   background: #fff;

//   li.country {
//     padding: 0 10px;
//     height: 30px;
//     line-height: 30px;
//     font-size: 13px;
//     border-bottom: 1px solid #ccc;
//     cursor: pointer;

//     &:hover {
//       background: #32afa9;
//       color: #fff;
//     }
//   }
// }

// .autocomplete-active {
//   background: #32afa9;
//   color: #fff;
// }
