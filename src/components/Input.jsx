import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  return (
    <div className="input">
      <div className="left">
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="right">
        <AttachFileIcon className="icon" />
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => e.target.files[0]}
        />
        <label htmlFor="file">
          <AddPhotoAlternateOutlinedIcon className="icon" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
