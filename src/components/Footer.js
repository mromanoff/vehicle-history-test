import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: ${props => props.theme.color.primary2};
  background-color: ${props => props.theme.color.primary1};
  min-height: 270px;
  padding: 2rem 0;
  text-align: center;
`;

const SocialIcons = styled.ul`
  margin-bottom: 2rem;
  padding: 0;
`;

const SocialIcon = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
`;

const IconTwitter = styled.a`
    &:before{
      content: "\e6b1";
    }
`;

const Separator = styled.hr`
  border-color: #647062;
  border-left: none;
  border-right: none;
  border-top: none;
  margin: 2rem 0;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter role="contentinfo">
        <SocialIcons>
          <SocialIcon>
            <IconTwitter
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
              href="#"
              className="icon-twitter"
            />
          </SocialIcon>
          <SocialIcon>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="github"
              href="#"
              className="icon-github2"
            />
          </SocialIcon>
          <SocialIcon>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
              href="#"
              className="icon-linkedin"
            />
          </SocialIcon>
        </SocialIcons>

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
        <Separator />
        <p className="footer__copyright">
          &copy; Copyright Romanoff.io 1998 — 2017 All Right Reserved.
        </p>
      </StyledFooter>
    );
  }
}

export default Footer;
