import {InfoCookies} from "./modules/InfoCookies.js";

const InfoCookie = new InfoCookies;

const closeLink = document.querySelector('.close');

closeLink.addEventListener('click', (event) => {

    event.preventDefault();

    InfoCookie.setCookie();

});