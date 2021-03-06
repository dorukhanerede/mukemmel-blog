import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";
import { auth } from "../src/firebase/index";
import Router from "next/router";

const Profile = ({ User, otherProfile }) => {
  let user = User;
  let display;
  let image;

  // if (User != null) {
  if (auth.currentUser != undefined && auth.currentUser != null) {
    if (auth.currentUser.isAnonymous) {
      display = "Guest";
      image = otherProfile ? (
        <div className="container float-left mr-4 profile-information">
          <FontAwesomeIcon icon={faUser} width="100px"></FontAwesomeIcon>
          {display}
        </div>
      ) : (
        <div className="container float-right mr-4 mini-profile">
          <FontAwesomeIcon icon={faUser} width="35px"></FontAwesomeIcon>
          {display}
        </div>
      );
    } else {
      user = auth.currentUser;
      let firstLetter = user.displayName.slice(0, 1);
      let secondLetter = user.displayName.split(" ")[1];
      secondLetter = secondLetter.slice(0, 1);
      display = firstLetter + secondLetter;
      image = User ? (
        <img
          src={
            otherProfile
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmdIsW4yYZG0t3VLebRq_aweD7-iziWjwSeYdpuqmTL-c-UUyz"
              : user.photoURL
          }
          className="container float-left mr-4 profile-information"
          title={display}
        ></img>
      ) : (
        <img
          src={user.photoURL}
          className="container float-right mr-4 mini-profile"
          title={display}
        ></img>
      );
    }
  }
  return User != null ? (
    image
  ) : (
    <a
      className="back-container"
      onClick={() => {
        Router.push("/profile");
      }}
    >
      {image}
    </a>
  );
};
export default Profile;
