import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserLocation from "./geo/UserLocation";

const User = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    const getUser = async () => {
      const { id } = params;
      const res = await axios.get(
        `${BASE_URL}/users/${id}`
      );

      const user = res.data;
      setUser(user);
    };
    getUser();
  }, [params]);
  return (
    <div className="container m-5">
      <h3>User Details</h3>

      {user ? <div className="card p-2 mb-1">
        <div className="">
          <div key={user?.id}>
            <h6>Personal Details</h6>
            <small>Name: {user?.name}</small>
            <small>Email: {user.email}</small>
            <small>Phone: {user.phone}</small>
            <small>Website: {user.website}</small>
            <small>Username: {user.username}</small>
            <small>
              Address:{" "}
              {`${user?.address?.suite}, ${user.address?.street}, ${user?.address?.city}`}
            </small>
            <small>Zipcode: {user?.address?.zipcode}</small>
            <br></br>
            <h6>Company Details</h6>
            <small>Company: {user.company?.name}</small>
            <small>Catch Phrase: {user.company?.catchPhrase}</small>
            <small>BS: {user.company?.bs}</small>
          </div>

          <div className="MapView">
            <UserLocation user={user} />
          </div>
        </div>
      </div> : "Loading...."}
    </div>
  );
};

export default User;
