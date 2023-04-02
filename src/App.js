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

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

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

export default App;
