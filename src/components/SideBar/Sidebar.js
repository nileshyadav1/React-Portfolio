import React, { useRef  } from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link ,  useLocation} from "react-router-dom";
import { ToggleSidebarAction, toggleState } from "../../store/ToggleSidebar";
import {     ToggleLightModeAction , isLightMode } from "../../store/ToggleLightModeSlice";
const Sidebar = () => {
  // const [lightMode, setLightMode] = useState(false);
  const CurrentYear = new Date().getFullYear();
  const IsThemeLight = useSelector(isLightMode);

  const dispatch = useDispatch();
  const SidebarState = useSelector(toggleState);

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const handleToggleSidebar = () => {
    dispatch(ToggleSidebarAction());
  };

  const SideWrap = useRef();
  const checkClick = (e) => {
    if (e.target === SideWrap.current) {
      dispatch(ToggleSidebarAction());
    }

    console.log("E target", e.target);
    console.log("Ref Current", SideWrap.current);
  };

  return (
    <div onClick={checkClick} ref={SideWrap}>
      {/* ------- Aside ------- */}
      <div className={`aside  ${SidebarState ? "open" : ""} `}>
        <div
          className={`nav-toggler ${SidebarState ? "open" : ""}`}
          onClick={handleToggleSidebar}
        >
          <span></span>
        </div>
        <div className="aside-inner">
          {/* <div className="logo">
          <a href="#">Nilesh</a>
          </div>  */}
          <div>
            <img
              src="./assets/profile.jpg"
              alt="profile"
              className="shadow-dark"
            />

            <ul className="nav">
              <li>
                <Link to="/" className={splitLocation[1] === "" ? "active" : ""}>
                  <i className="fa fa-home"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={splitLocation[1] === "about" ? "active" : ""}>
                  <i className="fa fa-user"></i>About
                </Link>
              </li>
              <li>
                <Link to="/skills" className={splitLocation[1] === "skills" ? "active" : ""}>
                  <i className="fa fa-list"></i>Skills
                </Link>
              </li>

              <li>
                <Link to="/projects" className={splitLocation[1] === "projects" ? "active" : ""}>
                  <i className="fa fa-briefcase"></i>Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className={splitLocation[1] === "contact" ? "active" : ""}>
                  <i className="fa fa-comments"></i>Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <div className="theme-swtich-container">
              <span style={{ color: IsThemeLight ? "grey" : "#c96dfd"}}>☽ </span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => dispatch(ToggleLightModeAction())}
                  />
                  <span className="slider round"> </span>
                </label>
              </div>
              <span style={{ color: IsThemeLight ?  "yellow" : "grey"  }}>☀︎</span>
            </div>
            <div className="copyright-text">&copy; {CurrentYear} Nilesh Yadav </div>
          </div>
        </div>
      </div>
      {/* ---XX-- Aside ---XX-- */}
    </div>
  );
};

export default Sidebar;
