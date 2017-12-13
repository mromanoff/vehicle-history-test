import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer role="contentinfo" className="footer">
        <ul className="footer__social-icons">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
              href="#"
              className="icon-twitter"
            />
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="github"
              href="#"
              className="icon-github2"
            />
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
              href="#"
              className="icon-linkedin"
            />
          </li>
        </ul>
        <ul className="footer__links">
          <li className="active">
            <a
              href="#"
              className="header__link--exact-active header__link--active"
            >
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="">
              Photography
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact
            </a>
          </li>
        </ul>
        <hr />
        <p className="footer__copyright">
          &copy; Copyright Romanoff.io 1998 — 2017 All Right Reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
