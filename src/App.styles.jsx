import styled from "styled-components";
import { Button } from "react-bootstrap";
export const RapperdApp = styled.div`
  text-align: center;
  color: silver;

  .rapperdContent {
    background-color: gray;
    border: 1px solid gold;
    textalign: center;
  }
  small {
    display: block;
  }
  Strong {
    color: red;
  }
  p {
    border: 1px dotted silver;
  }
  .cors {
    color: gold;
  }

  .ModalStyle {
    small {
      display: block;
      color: red;
    }
    Strong {
      color: red;
    }
    p {
      border: 1px dotted silver;
      color: purple;
    }
  }
  .ModalContent {
    text-align: center;
    align_items: center;
    .cors {
      color: danger;
    }
    .buttonClose {
      &:hover {
        display: inline-block;
        text-decoration: none;
        background-color: red;
        background-position: 100% 150%;
        background-repeat: repeat-x;
        transition: background-position 3s ease, color 3s ease;
      }
    }
  }
`;
export const ButtonClose = styled(Button)`
  &:hover {
    background-color: black;
    color: white;
  }
`;
