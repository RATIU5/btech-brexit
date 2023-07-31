import { brexit } from "./brexit";
const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
inputEl === null || inputEl === void 0 ? void 0 : inputEl.addEventListener("input", () => {
    const prefix = "btech-brexit";
    const input = inputEl === null || inputEl === void 0 ? void 0 : inputEl.value;
    let res = "";
    if (input) {
        res = brexit(input, prefix);
    }
    outputEl.value = res;
    const parser = new DOMParser();
    const documentContent = parser.parseFromString(res, "text/html");
    const appElement = document.querySelector("#app");
    if (appElement) {
        appElement.innerHTML = "";
        Array.from(documentContent.body.children).forEach((child) => {
            appElement.appendChild(child);
        });
    }
});
