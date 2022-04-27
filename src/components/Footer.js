import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${classes.footer}`}>
      <div className={`pt-4 ${classes.footerContainer}`}>
        <h4 className="text-white fw-normal">Still need help ?</h4>
        <div class={`${classes.inputDiv}`}>
          <form className={classes.formControl}>
          <div> <label for="firstName">First Name</label>
           <input type="text" id="firstName"/></div>
           <div><label for="lastName">Last Name</label>
           <input type="text" id="lastName"/></div>
           <div><label for="email">Email</label>
           <input type="email" id="firstName"/></div>
           
           <div className={classes.buttonHolder}>
               <button>Get Started</button>
           </div>
          </form>
        </div>
        <div className={`text-white ${classes.containerLinks}`}>
        <div>
        <p><b>Products</b></p>
        <p>Personalization</p>  
        <p>eCommerce</p> 
        <p>Order Managment</p> 
        <p>Point of Sale</p>  
        </div>
        <div>
            <p><b>Resources</b></p>
            <p>Blog</p>
            <p>Developer Blog</p>
            <p>Developers</p>
            <p>Support</p>
        </div>
        <div>
            <p><b>Who We Are</b></p>
            <p>Who We Are</p>
            <p>Leadership</p>
            <p>News/Press</p>
            <p>Ecommerce Awards</p>
        </div>
        <div className="text-center"><b>Employee Login</b></div>
        </div>
        
      </div>

    </div>
  );
};

export default Footer;
