
import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import elementClosest from 'element-closest';
elementClosest(window);


import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import toggelePopUp from "./modules/toggelePopUp";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import command from "./modules/command";
import calculateCost from "./modules/calculateCost";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";


// Timer
countTimer('1 may 2020');
// Menu
toggleMenu();
// PopUp
toggelePopUp();
// Tabs
tabs();
// Slider
slider();
// Command
command();
// Calculate cost
calculateCost();
// Calculator
calc(100);
// Send-ajax-form
sendForm();

