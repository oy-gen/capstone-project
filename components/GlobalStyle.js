import { createGlobalStyle } from 'styled-components';
import { keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,400&display=swap');
  
  html {
  --background-color: #EFEFEF;
  --text-maincolor: #1C1B1B;
  --text-middlecolor:#4f4f4f;
  --text-lightcolor: #7E7E7E;
  --signal-color: #F94C43;
  --accent-color: #506bcc;
  --backoffice-maincolor:80, 107, 204;

  --nav-height: 75px;
  --nav-height-mobile:65px;
  }
  
 * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;  
    
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    font-size: 1rem;
    max-width: 800px;
    margin: var(--nav-height-mobile) auto;
  }
   
  button {
    text-align: left;
    display:flex;
    align-items: center;
    gap: 0.6rem;
    border-style: none;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    @media (max-width: 600px) {
    font-size: 1rem;
  }
  }
  h1 {
  color: var(--text-maincolor);
  font-size: 1.2rem;
  line-height: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
  &.back-office {
    color: var(--background-color);
  }
  }

  h2 {
  color: var(--text-maincolor);
  line-height: 1.2rem;
  padding-bottom: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  &.back-office {
    color: var(--background-color);
  }
  }

  h3 {
    color: var(--text-maincolor);
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    &.back-office {
    color: var(--text-middlecolor);
  }
  }

  h4 {
  text-transform: uppercase;
  color: var(--text-lightcolor);
  font-size: 1rem;
  font-weight: 600;
  &.back-office {
    color: var(--text-middlecolor);
    margin-top:5px;
  }
  }

  h5 {
  color: var(--text-lightcolor);
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 400;
  &.back-office {
    color: var(--text-middlecolor);
  }
  }

  p {
  padding-bottom: 0.6rem;
  color: var(--text-lightcolor);
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  &.back-office {
    color: var(--text-middlecolor);
    padding-bottom: 0rem;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
}

label {
  padding-bottom: 0.6rem;
  color: var(--text-lightcolor);
  font-weight: 400;
  &.back-office {
    color: var(--text-maincolor);
    padding-bottom: 0rem;
    font-size: 1rem;
  }
}
span {
  color: var(--text-darkcolor);
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
}

  a {
  color: var(--accent-color);
  }
  `;

export default GlobalStyle;

export const FadeInOut = keyframes`

    0% {
      opacity: 0;
    }
    8%{
        opacity:1
    }
    92% {
      opacity: 1;
    }
    100%{
        opacity:0;
    }
`;
