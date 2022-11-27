import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

const Input = () => {
  return (
    <div className="input">
      <div className="left">
        <input type="text" placeholder="Type something..." />
      </div>
      <div className="right">
        <AttachFileIcon className="icon" />
        <AddPhotoAlternateOutlinedIcon className="icon" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
