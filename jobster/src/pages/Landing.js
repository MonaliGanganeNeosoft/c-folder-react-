//import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import React from "react";
// import styled from "styled-components";
import { Logo } from "../components/index";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        {/* <img src={logo} alt="jobstar logo" className="logo" /> */}
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptate quis odit at eaque accusantium obcaecati inventore
            blanditiis eligendi. Facere sed aliquid quae voluptatum aperiam
            nihil porro voluptatem mollitia commodi.
          </p>
          {/* <button className="btn btn-hero">Login/Register</button> */}
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: flex;
//     align-items: center;
//     margin-top: -3rem;
//   }
//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//   }
//   p {
//     color: var(--grey-600);
//   }
//   .main-img {
//     display: flex;
//   }
//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `;

export default Landing;
