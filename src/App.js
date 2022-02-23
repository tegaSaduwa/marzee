import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "./config";
import axios from "axios";
import AllUsersLocation from "./components/geo/AllUsersLocation";
import Users from "./components/Users";
import User from "./components/User";
import "./App.css";

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`${BASE_URL}/users`);
      const users = res.data;
      setState(users);
    };

    getUsers();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/users-location" element={<AllUsersLocation users={state} />} />
          <Route path="/" element={<Users users={state} />} />
          <Route path="user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
