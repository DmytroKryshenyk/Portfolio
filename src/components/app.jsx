import React from "react";
import UserInfo from './userInfo/userInfo.jsx';
import "./app.scss";

export default class App extends React.Component  {
  render() {
    return (
      <div className="app__container">
        <h1>Hi, it’s my React App!</h1>
        <img src="./images/lorem-ipsum-img.jpg" className="app__img" alt="lorem image"/>
        <UserInfo name="Dmytro" surname="Kryshenyk" />
      </div>
    );
  }
}
