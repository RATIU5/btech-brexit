import { Lexer } from "./lexer";

const lexer = new Lexer(`
# H1
## H2
### H3
#### H4
##### H5
###### H6

*italic*
**bold**

- list item 1
- list item 2
- list item 3

> lorem ipsum dolor sit amet
> consectetur adipiscing elit

---

~~strikethrough~~

[link](https://example.com)

\`code\`
\`\`\`
code block
\`\`\`
`);
const tokens = lexer.lex();

for (const token of tokens) {
  console.log(`Type: ${token.type}, Value: ${token.value}`);
}
