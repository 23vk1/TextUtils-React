import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
              <a className="nav-link" href="/">{props.about}</a>
            </li>
          </ul>
          <button
            style={{ height: "20px", width: "20px", backgroundColor: "green" }}
            className="mx-3"
            onClick = {()=>{props.handleTheme("green", "yellow")}}
            ></button>  
          <button
            style={{ height: "20px", width: "20px", backgroundColor: "grey" }}
            className="mx-3"
            onClick = {()=>{props.handleTheme("grey", "red")}}
            ></button>
          <button
            style={{ height: "20px", width: "20px", backgroundColor: "blue" }}
            className="mx-3"
            onClick = {()=>{props.handleTheme("blue", "yellow")}}
            ></button>
          <button
            style={{ height: "20px", width: "20px", backgroundColor: "black" }}
            className="mx-3"
            onClick = {()=>{props.handleTheme("black", "white")}}
          ></button>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
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
