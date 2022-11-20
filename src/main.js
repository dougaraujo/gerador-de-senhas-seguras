import { nanoid } from "nanoid";

const passwdBtnEl = document.querySelector('button');
const displayPasswdEl = document.querySelector('h2');

passwdBtnEl.addEventListener('click', () => {
    const randomPasswd = nanoid();
    displayPasswdEl.innerHTML = randomPasswd;
});


