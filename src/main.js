import { nanoid } from "nanoid";
import "./style.css";
import copy from "clipboard-copy";

const passwdBtnEl = document.querySelector('button');
const displayPasswdEl = document.querySelector('h2');
const displayCopiedEl = document.querySelector('p');

passwdBtnEl.addEventListener('click', () => {
    const randomPasswd = nanoid();
    displayPasswdEl.innerHTML = randomPasswd;
    displayPasswdEl.addEventListener('click', () => {
        copy(randomPasswd);
        displayCopiedEl.classList.remove('not-display');
        setTimeout(() => {
            displayCopiedEl.classList.add('not-display');
        }, 2500)
    });
});




