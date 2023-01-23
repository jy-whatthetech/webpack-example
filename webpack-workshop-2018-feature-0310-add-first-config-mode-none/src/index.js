import nav from "./nav";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import buttonStyles from "./button.css";

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(
  nav(),
  top,
  bottom,
  makeButton("My first button!"),
  makeColorStyle("cyan")
);
