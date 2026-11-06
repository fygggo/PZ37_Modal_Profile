"use strict";

const dialog = document.querySelector("#profile-dialog");
const openButton = document.querySelector("#open-dialog");
const closeButton = document.querySelector("#close-dialog");
const form = document.querySelector("#profile-form");
const input = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
const status = document.querySelector("#profile-status");
const dialogError = document.querySelector("#dialog-error");

openButton.addEventListener("click", () => {
    dialogError.textContent = "";
    input.value = profileName.textContent;
    dialog.showModal();
});
closeButton.addEventListener("click", () =>  dialog.close());
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name  = input.value.trim();
    if (name === "") {
        dialogError.textContent = "введите имя, затем сохраните.";
        return;
    }
    dialogError.textContent = "";
    profileName.textContent = name;
    status.textContent = `имя изменено: ${name}.`;
    dialog.close();
});
