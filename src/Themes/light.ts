import { DefaultTheme } from "styled-components";

const Light: DefaultTheme = {
  title: "light",

  colors: {
    primary: "#009FB7",
    secundary: "#083D77",
    button: "#083D77",
    background: "#f5f5f5",
    text: "#000",
  },

  heightDiv: 200,

  circle: {
    color: "#000",
    bColor: "#aaa",
  },

  button: {
    backgroundColor: "#009FB7",
    hoverColor: "#083D77",
  },

  searchButton: {
    background: "#083D77",
    backgroundInput: "#083D77",
    bgHover: "blue",
  },
};

export default Light;
