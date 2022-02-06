import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterTag}>
        <a href="https://github.com/Jagadish-prasad-mohanty" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="www.linkedin.com/in/jagadish-mohanty-30a68a1b4" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <hr />
      <div className={classes.FooterMain}>
        <div className={`${classes.Contact} ${classes.FooterSec}`}>
          <h3>
            Service <i class="fab fa-servicestack"></i>
          </h3>
          <p>Delicious Food</p>
          <p>Good Service</p>
          <p>Food Delivery</p>
        </div>
        <div className={`${classes.Contact} ${classes.FooterSec}`}>
          <h3>
            Location <i class="fas fa-search-location"></i>
          </h3>
          <p>Odisha</p>
          <p>Delhi</p>
          <p>Bangalore</p>
        </div>
        <div className={`${classes.Contact} ${classes.FooterSec}`}>
          <h3>
            Contacts <i class="fas fa-id-card"></i>
          </h3>
          <p>6370083823</p>
          <p>mohantyjagadish@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
