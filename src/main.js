import { brexit } from "./brexit";
const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#html-button");
let res = "";
buttonEl.addEventListener("click", () => {
    navigator.clipboard.writeText(res);
    buttonEl.textContent = "Copied!";
    setTimeout(() => {
        buttonEl.textContent = "Copy HTML to Clipboard";
    }, 2000);
});
if ((inputEl === null || inputEl === void 0 ? void 0 : inputEl.value) !== "") {
    res = brexit(inputEl === null || inputEl === void 0 ? void 0 : inputEl.value);
    injectHTML(res);
}
inputEl === null || inputEl === void 0 ? void 0 : inputEl.addEventListener("input", () => {
    const prefix = "btech-brexit";
    const input = inputEl === null || inputEl === void 0 ? void 0 : inputEl.value;
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
