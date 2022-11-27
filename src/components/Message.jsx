import React from "react";

const Message = ({ sender }) => {
  return (
    <div className={`message ${sender && "sender"}`}>
      <div className="left">
        <img
          src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="right">
        <p>Hello</p>
        {/* <img
          src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
