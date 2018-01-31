import React, { Component } from 'react';
import styled from 'styled-components';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

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
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.color.primary2};
    color: ${props => props.theme.color.primary2};
    font-size: ${props => props.theme.size.lg};
    text-decoration: none;
    
     &:hover {
        background-color: ${props => props.theme.color.primary2};
        color: ${props => props.theme.color.white};
        border-color: ${props => props.theme.color.white};
     }
  }
`;

const Separator = styled.hr`
  border-color: ${props => props.theme.color.primary2};
  border-left: none;
  border-right: none;
  border-top: none;
  margin: 2rem 0;
`;

const Links = styled.ul`
    letter-spacing: 1.5px;
    margin: 1rem 0;
    padding: 0;
`;

const Link = styled.li`
  display: inline-block;
  margin: 0 ${props => props.theme.size.sm};
  > a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
      font-size: ${props => props.theme.size.sm};
      color: ${props => props.theme.color.primary2};
  }
`;

const Copyright = styled.div`
    font-size: ${props => props.theme.size.xs};
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter role="contentinfo">
        <SocialIcons>
          <SocialIcon>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <FaTwitter />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <FaGithubAlt />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <FaLinkedin/>
            </a>
          </SocialIcon>
        </SocialIcons>

        <Links className="footer__links">
          <Link>
            <a
              href="#"
              className="header__link--exact-active header__link--active"
            >
              Overview
            </a>
          </Link>
          <Link>
            <a href="#" className="">
              Work
            </a>
          </Link>
          <Link>
            <a href="#" className="">
              Photography
            </a>
          </Link>
          <Link>
            <a href="#" className="">
              Contact
            </a>
          </Link>
        </Links>
        <Separator />
        <Copyright>
          &copy; Copyright Romanoff.io 1998 — 2018 All Right Reserved.
        </Copyright>
      </StyledFooter>
    );
  }
}

export default Footer;
