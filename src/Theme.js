import { createGlobalStyle } from "styled-components";
// #121113
// #232123
export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  button: "#fff",

};

export const darkTheme = {
  // body: "#0A0E21",
  body: "#121113",
  fontColor: "#fff",
  // button: '#1d1e33',
  button: '#232123',

};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}
  .icon{
    color: ${(props) => props.theme.fontColor};
  }

  .Feature__title{
    color: ${(props) => props.theme.fontColor};
  }
  .Feature__Button {
    background-color: ${(props) => props.theme.button};
  }
  .Result{
    background-color: ${(props) => props.theme.button};
  }
`;