import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#00cc44",
  yellow: "#EEAB30",
};

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
    body {
        font-family: 'Noto Sans JP', sans-serif;
    }
    html,
    body,
    div,
    span {
      margin: 0;
      padding: 0;
      border: 0;
    }
    button {
      padding: 10px;
      background-color: ${colors.green};
      color: white;
      font-size: 14pt;
      border-radius: 12px;
      border-style: none;
      width: 175px;

      &:hover {
        cursor: pointer;
      }
    }
`;
