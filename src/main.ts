import { brexit } from "./brexit";

const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const convertEl = document.querySelector("#convert");

convertEl?.addEventListener("click", () => {
  const input = (inputEl as any)?.value;
  let res = "";
  if (input) {
    res = brexit(input);
  }
  (outputEl as any)!.value = res;
});
