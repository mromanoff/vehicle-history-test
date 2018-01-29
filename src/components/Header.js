import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Logo from './Logo';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  height: 50px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: ${props => props.theme['color-brand-primary4']};
  
  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
    height: 130px;
    flex-direction: column;
    align-items: normal;
    justify-content: center;
  `} 

  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  `};
`;

const LogoWrapper = styled.h1`
  margin: 0;
  font-size: 0.75rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
    margin: 0 0 1rem 2rem;
    justify-content: left;
  `} 

  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    margin: 0 0 0 2rem;
  `};
`;

const Header = () => (
  <StyledHeader role="banner">
    <LogoWrapper>
      <Logo />
      <span>VehicleHistory code test</span>
    </LogoWrapper>
  </StyledHeader>
);

export default Header;
