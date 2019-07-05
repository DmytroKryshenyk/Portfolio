import React from "react";
import "./userinfo.scss";

const UserInfo = function(props) {
  return (
    <div className="user__info">
      <p className="user__greeting"> Hi, this text and text greeting below are test component.</p>
      <p className="user__greeting"> My my mame is {props.name}, my surname is {props.surname} </p>
    </div>
  );
};

export default UserInfo;


