import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  let iconSourceF;
  if (props.icon === "paper") {
    iconSourceF =
      "https://img.icons8.com/external-fauzidea-detailed-outline-fauzidea/64/000000/external-paper-ecology-fauzidea-detailed-outline-fauzidea.png";
  } else if (props.icon === "release") {
    iconSourceF =
      "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-loudspeaker-new-year-kiranshastry-lineal-kiranshastry-1.png";
  } else {
    iconSourceF = "https://img.icons8.com/ios/50/000000/code.png";
  }

  return (
    <div className={`${classes.card} mt-3`}>
      <div className={`p-3 ${classes.iconTriangleholder}`}>
        <div className={`${classes.triangle} `}>
          <div>
            <img
              className={`${classes.iconsize}`}
              src={iconSourceF}
              alt="icon"
            />
          </div>
        </div>
      </div>
      <div className="p-3">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
