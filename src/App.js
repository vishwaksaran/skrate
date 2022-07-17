import logo from "./logo.svg";
import "./App.css";
import "./dashboard.css";
import logo1 from "./logo1.png";
import Top from "./Top";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleprovider } from "./firebase";
import { BrowserRouter, Route, Switch, useNavigate } from "react-router-dom";

function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App" id="wrapper">
      <ul
        class="navbar-nav bg-gradient sidebar sidebar-dark accordion shadow-sm p-3 mb-5 bg-white rounded"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            <img
              src={logo1}
              style={{ width: "50px", position: "relative", right: "58%" }}
            />
          </div>
        </a>

        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <a
            class="nav-link"
            href="index.html"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              color: "black",
            }}
          >
            <i class="fas fa-home" style={{ color: "black" }}></i>
            <h4>Dashboard</h4>
          </a>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="index.html"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              color: "black",
            }}
          >
            <i class="fa fa-th-large" style={{ color: "black" }}></i>
            <h4>Collapse</h4>
          </a>
        </li>

        <hr class="sidebar-divider" />

        <hr class="sidebar-divider" />

        {/* <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Login Screens:</h6>
              <a class="collapse-item" href="login.html">
                Login
              </a>
              <a class="collapse-item" href="register.html">
                Register
              </a>
              <a class="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div class="collapse-divider"></div>
              <h6 class="collapse-header">Other Pages:</h6>
              <a class="collapse-item" href="404.html">
                404 Page
              </a>
              <a class="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li> */}

        {/* <!-- Nav Item - Charts --> */}

        {/* <!-- Nav Item - Tables --> */}

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}

        {/* <!-- Sidebar Message --> */}
      </ul>
      <Top userN={user?.displayName} userP={user?.photoURL} />
    </div>
  );
}

export default App;
