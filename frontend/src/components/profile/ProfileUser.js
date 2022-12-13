import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditUser, getCurrent } from "../../JS/actions/userActions";
import "./profileUser.css";
import UpdateProfil from "./UpdateProfil";


const ProfileUser = () => {


  const profile = useSelector((state) => state.userReducer.user);
  console.log(profile)


  // const getuser = () => {};

  return (
    <div className="con">
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{profile.username}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">First name:</label>
                  <div className="name-div" >

                    <p>
                      {profile.firstName}
                    </p>

                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Last name:</label>
                  <div className="name-div" >

                    <p>
                      {profile.lastName}
                    </p>

                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email:</label>
                  <div className="name-div" >

                    <p>
                      {profile.email}
                    </p>

                  </div>
                </div>
              </div>

              <div className="row mt-3"></div>
              <div className="mt-5 text-center">
             <UpdateProfil iduser={profile._id}> </UpdateProfil>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus" />
                  &nbsp;Experience
                </span>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
