import { Lexer } from "./lexer";

const lexer = new Lexer("# Hello, *world*!");
const tokens = lexer.lex();

for (const token of tokens) {
  console.log(`Type: ${token.type}, Value: ${token.value}`);
}
