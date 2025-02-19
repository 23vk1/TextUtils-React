import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
              {/* <a className="nav-link" href="/">{props.about}</a> */}
            </li>
          </ul>

          <div className="d-flex">
            <div onClick={()=>{props.toggleMode('primary')}} className="bg-primary rounded mx-2" style={{height:"20px", width:"20px", cursor:"pointer"}}></div>
            <div onClick={()=>{props.toggleMode('danger')}} className="bg-danger rounded mx-2" style={{height:"20px", width:"20px", cursor:"pointer"}}></div>
            <div onClick={()=>{props.toggleMode('success')}} className="bg-success rounded mx-2" style={{height:"20px", width:"20px", cursor:"pointer"}}></div>
            <div onClick={()=>{props.toggleMode('warning')}} className="bg-warning rounded mx-2" style={{height:"20px", width:"20px", cursor:"pointer"}}></div>
          </div>



          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={()=>{props.toggleMode(null)}}
              role="switch"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  about: "About",
};
