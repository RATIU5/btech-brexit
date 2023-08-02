import { brexit } from "./brexit";

const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#html-button");
let res = "";

buttonEl.addEventListener("click", () => {
    if (res === "") return;
    navigator.clipboard.writeText(res);
    buttonEl.textContent = "Copied!";
    setTimeout(() => {
        buttonEl.textContent = "Copy HTML to Clipboard";
    }, 2000);
});

if ((inputEl as any)?.value !== "") {
    res = brexit((inputEl as any)?.value);
    injectHTML(res);
}

inputEl?.addEventListener("input", () => {
    const prefix = "btech-brexit";
    const input = (inputEl as any)?.value;
    if (input) {
        res = brexit(input, prefix);
    }
    injectHTML(res);  
});

function injectHTML(htmlString) {
    const parser = new DOMParser();
    const documentContent = parser.parseFromString(htmlString, "text/html");
    const appElement = document.querySelector("#app");
    if (appElement) {
        appElement.innerHTML = "";
        Array.from(documentContent.body.children).forEach((child) => {
            appElement.appendChild(child);
        });
    }
}
