import React from 'react';
import Classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={Classes.Footer}>
      <ul className={Classes.listCustom}>
        <li>
          <a
            className={Classes.socialLinks}
            href="https://github.com/pokemonTrainer5833"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className={Classes.socialLinks}
            href="https://www.facebook.com/aahan.charak"
            target="_blank"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            className={Classes.socialLinks}
            href="https://www.linkedin.com/in/aahan-singh-charak-966a23191/?originalSubdomain=in"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            className={Classes.socialLinks}
            href="https://www.instagram.com/aahan_singh_12/"
            target="_blank"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
      <p className={Classes.copyrightText}>
        Copyright &copy; 2020 Aahan Singh. All rights reserved.
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
