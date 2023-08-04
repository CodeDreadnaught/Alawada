import { getJokes } from "./get-jokes.js";

const appForm = document.querySelector(".app-form");

(function loadAllEventListeners() {
    appForm.addEventListener("submit", getJokes);
}) ();


