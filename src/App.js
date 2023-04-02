// import { Routes, Route, Navigate } from "react-router-dom"
// import Feed from './components/feed/Feed';
// import './App.css';
// import Sidebar from './components/sidebar/Sidebar';
// import Widgets from './components/widgets/Widgets';
// import Explore from "./components/explore/Explore";
// import Notifications from "./components/notifications/Notifications";
// import Messages from "./components/messages/Messages";
// import Profile from "./components/profile/Profile";
// import Lists from "./components/lists/Lists";
// import Bookmarks from "./components/bookmarks/Bookmarks";

// const App = () => {
//   return (
//     <div className="app">
//       {/* side bar */}
//       <Sidebar />

//       {/* feed */}

//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Feed />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/notifications" element={<Notifications />} />
//         <Route path="/messages" element={<Messages />} />
//         <Route path="/bookmarks" element={<Bookmarks />} />
//         <Route path="/lists" element={<Lists />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="*" element={<Feed />} />
//       </Routes>
//       <Widgets />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Feed from "./components/feed/Feed";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/widgets/Widgets";
import Explore from "./components/explore/Explore";
import Notifications from "./components/notifications/Notifications";
import Messages from "./components/messages/Messages";
import Profile from "./components/profile/Profile";
import Lists from "./components/lists/Lists";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Login from "./components/Login/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // useEffect(() => {
  //   if (location.pathname == "/profile") {
  //     console.log(location.pathname);
  //     Navigate("/login");
  //   }
  // });

  const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <div className="app">
        {location.pathname != "/login" ? <Sidebar /> : null}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Feed />} />
        </Routes>
        {location.pathname != "/login" ? <Widgets /> : null}
      </div>
    </>
  );
};

const ProtectedComponent = () => {
  return <div>This is a protected component</div>;
};

export default App;
