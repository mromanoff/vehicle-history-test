import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
     stroke: #f5f8fa;
     height: 38px;
     margin-right: 0.5rem;
`;

const Logo = () => (
  <Svg
    viewBox="0 0 61 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g strokeWidth="1" fill="none" fillRule="evenodd" strokeLinejoin="round">
      <path d="M25.023 16.61S15.5 15.838 11 23h25.023s-.917-6.57-11-6.39zM7 18V7v11zm3-14a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm17 12.61V23v-6.39zM24.023 39a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm36-3a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      <path strokeLinecap="round" d="M27 30.333V27h-4.977" />
      <path d="M57.058 29.829c-1.791-2.887-5.098-5.996-11.035-5.996h-5S40.94 12 25.023 12c0 0-11.637.726-19.023 6.503-3.659 2.862-.776 6.316-2.45 10.019-.827 1.83-1.66 4.017-2.139 6.229C.925 36.989 3.382 39 6.52 39h1.503a8 8 0 0 1 16 0h12a8 8 0 0 1 16-.003V39h3.929c1.696 0 3.071-.993 3.071-2.218 0-2.39-.613-4.772-1.965-6.953zm1.413 3.155a12.99 12.99 0 0 0-1.413-3.155 13.076 13.076 0 0 0-3.029-3.414c-.849.699-1.371 1.61-1.371 2.613 0 2.193 2.463 3.972 5.5 3.972.106 0 .208-.012.313-.016z" />
    </g>
  </Svg>
);

export default Logo;
