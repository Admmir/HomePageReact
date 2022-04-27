import React, { Fragment } from "react";
import classes from "./MainContainer.module.css";
import Card from "./CardMenu";

const MainContainer = () => {
  return (
    <Fragment>
      <div className={`${classes.containerFirstClass} container`}>
        <div className={classes.NavLine}>Home {">"} Getting Started</div>
      </div>

      <div className={`${classes.containerClass} container mt-4`}>
        <div className={`col-md-12 col-sm-12 col-lg-3 ${classes.sideMenu}`}>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                  autoFocus
                >
                  Getting Started
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className={`accordion-body ${classes.dropDownMenuBorder}`}>
                  <ul>
                    <li>
                      <strong>User Guides</strong>
                    </li>
                    <li>
                      <strong>Developer</strong>
                    </li>
                    <li>
                      <strong>Release Notes</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Personalization
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <strong>Should be more text</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-12 col-lg-9 ms-1 container`}>
          <h1 className="d-block">Getting Started</h1>
          <div className={` ${classes.cardContainer}`}>
            <Card
              icon="paper"
              title="User Guide"
              description="We're a new category with lot of useful information"
            />
            <Card
              title="Developer"
              description="We're a new category with lot of useful information"
            />
            <Card
              icon="release"
              title="Release Notes"
              description="We're a new category with lot of useful information"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainContainer;
