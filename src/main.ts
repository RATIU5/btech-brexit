import { brexit } from "./brexit";

const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const convertEl = document.querySelector("#convert");

convertEl?.addEventListener("click", () => {
  const prefix = "btech-brexit";
  const input = (inputEl as any)?.value;
  let res = "";
  if (input) {
    res = brexit(input, prefix);
  }

  (outputEl as any)!.value = res;

  const parser = new DOMParser();
  const documentContent = parser.parseFromString(res, "text/html");
  console.log(documentContent);
  const appElement = document.querySelector("#app");
  if (appElement) {
    Array.from(documentContent.body.children).forEach((child) => {
      appElement.appendChild(child);
    });
  }
});
