import { Token, TokenType } from "./token";

export class Lexer {
  private pos: number = 0;
  private tokens: Token[] = [];
  private input: string = "";

  constructor(input: string) {
    this.input = input;
  }

  lex() {
    while (this.pos < this.input.length) {
      if (this.input[this.pos] === "#") {
        this.addHeaderToken();
        this.pos += 1;
      } else if (this.input[this.pos] === "*") {
        this.addToken(TokenType.BOLD);
        this.pos += 1;
      }
      // Add more token matching rules here...
    }

    return this.tokens;
  }

  private addHeaderToken() {
    let hashCount = 1;
    while (hashCount < 6 && this.input[this.pos + hashCount] === "#") {
      hashCount += 1;
    }

    let tokenType: TokenType;
    switch (hashCount) {
      case 1:
        tokenType = TokenType.HEADER1;
        break;
      case 2:
        tokenType = TokenType.HEADER2;
        break;
      case 3:
        tokenType = TokenType.HEADER3;
        break;
      case 4:
        tokenType = TokenType.HEADER4;
        break;
      case 5:
        tokenType = TokenType.HEADER5;
        break;
      case 6:
        tokenType = TokenType.HEADER6;
        break;
      default:
        throw new Error("Invalid header count");
    }

    const value = this.input.substring(this.pos, hashCount);
    this.tokens.push(new Token(tokenType, value));

    this.pos += hashCount;
  }

  private addToken(type: TokenType) {
    const value = this.input[this.pos];
    this.tokens.push(new Token(type, value));
  }
}
