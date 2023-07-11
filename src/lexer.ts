import { Token, TokenType } from "./token";

export class Lexer {
  private _pos: number = 0;
  private nextPos: number | undefined = undefined;
  private tokens: Token[] = [];
  private input: string = "";

  constructor(input: string) {
    this.input = input;
    this.pos = 0;
  }

  private set pos(value: number) {
    this._pos = value;
    this.nextPos = this._pos + 1;
  }
  private get pos() {
    return this._pos;
  }

  lex() {
    while (this.pos < this.input.length) {
      if (this.input[this.pos] === "#") {
        let headingLevel = 1;
        // while (this.input[this.nextPos!] === "#") {
        //   this.pos += 1;
        //   headingLevel += 1;
        // }

        switch (headingLevel) {
          case 1:
            this.addToken(TokenType.H1);
            break;
          case 2:
            this.addToken(TokenType.H2);
            break;
          case 3:
            this.addToken(TokenType.H3);
            break;
          case 4:
            this.addToken(TokenType.H4);
            break;
          case 5:
            this.addToken(TokenType.H5);
            break;
          case 6:
            this.addToken(TokenType.H6);
            break;
        }
      } else {
        this.addToken(TokenType.TEXT);
        this.pos += 1;
      }
    }
    return this.tokens;
  }

  private addToken(type: TokenType) {
    const value = this.input[this.pos];
    this.tokens.push(new Token(type, value));
  }
}
