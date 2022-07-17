import Job from "./Job";
import { userAuthState } from "react-firebase-hooks/auth";
import { auth, googleprovider } from "./firebase";
import { useNavigate } from "react-router-dom";
import Main from "./Main";
import Data from "./api.json";
import { useState, memo } from "react";
import { useEffect } from "react";
import Overview from "./Overview";

export default function Top({ userN, userP }) {
  const navigate = useNavigate();
  const [item, setS] = useState([]);
  const [job, setJ] = useState([]);

  console.log(Data);

  useEffect(() => {
    setS(Data[0].upcoming_sessions);
    setJ(Data[0].job_postings);
  }, []);
  console.log(item);
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* <!-- Sidebar Toggle (Topbar) --> */}
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars">Signout</i>
          </button>

          {/* <!-- Topbar Search --> */}

          <ul class="navbar-nav ml-auto">
            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

            {/* <!-- Nav Item - Alerts --> */}
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  SignOut
                </button>
                {/* <!-- Counter - Alerts --> */}
              </a>
            </li>

            {/* <!-- Nav Item - Messages --> */}
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={userP}
                  alt="user"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                />
                {/* <!-- Counter - Messages --> */}
              </a>
            </li>

            {/* <!-- Nav Item - User Information --> */}
            <li
              class="nav-item dropdown no-arrow"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <span>{userN}</span>
              </div>
            </li>
          </ul>
        </nav>
        <Main />
        {/* MAIN CONTENT */}
        <div class="row ml-5">
          <div class="col">
            <div className="container card">
              <h1 class="card-title text-left">OVERVIEW</h1>
              <div className="row">
                <div className="col">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-body d-flex" style={{ gap: "3vh" }}>
                      <h5
                        class="text-left"
                        style={{ position: "relative", top: "19%" }}
                      >
                        Profile Views
                      </h5>
                      <span style={{ fontSize: "xxx-large" }}>89</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-body d-flex" style={{ gap: "3vh" }}>
                      <h5
                        class="text-left"
                        style={{ position: "relative", top: "19%" }}
                      >
                        Mentorship Session
                      </h5>
                      <span style={{ fontSize: "xxx-large" }}>89</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-body d-flex" style={{ gap: "3vh" }}>
                      <h5
                        class="text-left"
                        style={{ position: "relative", top: "19%" }}
                      >
                        JOB APPILED
                      </h5>
                      <span style={{ fontSize: "xxx-large" }}>89</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-body d-flex" style={{ gap: "3vh" }}>
                      <h5
                        class="text-left"
                        style={{ position: "relative", top: "19%" }}
                      >
                        SKILLS VERIFIED
                      </h5>
                      <span style={{ fontSize: "xxx-large" }}>89</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container card" style={{ display: "inline-flex" }}>
              <div class="card-body">
                <h1 class="card-title text-left">UPCOMING SESSION</h1>
                <div className="overview ml-5 " style={{ gap: "5vh" }}>
                  {item.map((v, i) => {
                    return (
                      <Overview
                        name={v.mentor_name}
                        time={v.timings}
                        dates={v.date}
                        type={v.session_type}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col ">
            {/* 2 of 2 */}
            <div class="card" style={{ width: "80%" }}>
              <div class="card-body">
                <h1 class="card-title text-left">NEW JOBS</h1>
                {job.map((v, i) => {
                  return (
                    <Job
                      name={v.role}
                      organize={v.organization_name}
                      location={v.location}
                      dates={v.date_posted}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
