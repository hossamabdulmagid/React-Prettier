import styled from "styled-components";

export const RapperdNavbar = styled.div`
  height: auto;
  //   width: 1500px;
  color: silver;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  ul li a {
    text-decoration: none;
    background-color: #000;
    color: #fff;
    padding: 15px 45px;
    font-weight: bold;
  }

  ul li a:hover {
    background-color: red;
    color: #fff;
  }

  .active-link {
    color: purple;
    background-color: red;
  }
`;
