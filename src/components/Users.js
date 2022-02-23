import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <div className="container m-5">
      <div className="d-flex justify-content-between">
        <h3>Users</h3>
        <div className="mt-3">
          <Link to="/user-map" className="user_link">Map View</Link>
        </div>
      </div>
      {users.length > 0
        ? users?.map((user) => {
            return (<div className="card p-2 mb-1">
              <div className="d-flex justify-content-between">
                <div key={user?.id}>
                  <h5>{user?.name}</h5>
                  <small>{user.email}</small>
                  <small>{user.phone}</small>
                  <small>{user.company.catchPhrase}</small>
                </div>

                <div>
                  <Link to={`user/${user?.id}`} className="user_link">View Details</Link>
                </div>
              </div>
            </div>);
          })
        : "loading..."}
    </div>
  );
};

export default Users;
