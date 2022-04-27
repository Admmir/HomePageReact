import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Fragment>
      <nav className={classes.navBackground}>
        <div className={classes.navContainer}>
          <ul className="text-white">
            <li>
              <a href="#s">Blog</a>
            </li>
            <li>
              <a href="#d">Developers</a>
            </li>
            <li>
              <a href="#s">Developers Blog</a>
            </li>
            <li>
              <a href="#d">Support</a>
            </li>
          </ul>
        </div>
        <div className={classes.shape}>sad</div>
        <div className={`input-group mb-3 ${classes.searchBar}`}>
          <button
            className={`btn ${classes["bg-gray"]} dropdown-toggle`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Products
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#d">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#s">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#d">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#d">
                Separated link
              </a>
            </li>
          </ul>

          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <button className={`btn ${classes.buttonSearch}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
