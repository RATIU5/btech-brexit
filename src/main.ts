import { Lexer } from "./lexer";
import { TokenType } from "./token";

const lexer = new Lexer(`
# H1
## H2
### H3
#### H4
##### H5
###### H6

*italic*
**bold**
***bold italic***

- list item 1
- list item 2
- list item 3

> lorem ipsum dolor sit amet
> consectetur adipiscing elit

---

~strikethrough~

[link](https://example.com)

\`code\`
\`\`\`
code block
\`\`\`
`);

for (
  let tok = lexer.nextToken();
  tok.type !== TokenType.EOF;
  tok = lexer.nextToken()
) {
  console.log(tok);
}
