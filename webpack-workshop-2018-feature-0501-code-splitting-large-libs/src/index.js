import nav from "./nav";
// import * as GSAP from "gsap";
const getGSAP = () => import("gsap");
// import { footer } from "./footer";
const getFooter = () => import("./footer");
const getLodashUniq = () => import("lodash-es/uniq");
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const setButtonStyles = (color) => import(`./button-styles/${color}`);

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);

button.addEventListener("click", e => {
    getFooter().then(({footerModule}) => {
        document.body.appendChild(footerModule.footer);
    });

    getGSAP().then(gsap => {
        console.log(gsap);
    });

    setButtonStyles("red").then(module => {
        button.style = module.default;
    });
});

document.body.appendChild(image);

/* start code for SSE */
import { MockEvent, EventSource } from 'mocksse';

// Instantiate a MockEvent.
new MockEvent({
  url: '/your-relative-or-absolute-url',
  responses: [
    { type: 'a message event', data: 'a short message' }
  ]
});

// Instantiate an EventSource.
const evtSource = new EventSource('/your-relative-or-absolute-url');

// Listen for a "a message event" event and handle appropriately.
evtSource.addEventListener('a message event', (event) => {
    console.log("EVENT RECEIVED");
    console.log(event);
  // event.type === 'a message event'
  // event.data === 'a short message'
});
