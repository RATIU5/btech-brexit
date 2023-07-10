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
        this.addHeaderToken();
      } else {
        this.addToken(TokenType.TEXT);
        this.pos += 1;
      }
    }
    return this.tokens;
  }

  private addHeaderToken() {
    let hashCount = 1;

    while (this.input[this.nextPos!] === "#" && hashCount < 6) {
      hashCount += 1;
      this.pos++;
    }

    let tokenType: TokenType;
    switch (hashCount) {
      case 1:
        tokenType = TokenType.H1;
        break;
      case 2:
        tokenType = TokenType.H2;
        break;
      case 3:
        tokenType = TokenType.H3;
        break;
      case 4:
        tokenType = TokenType.H4;
        break;
      case 5:
        tokenType = TokenType.H5;
        break;
      case 6:
        tokenType = TokenType.H6;
        break;
      default:
        throw new Error("Invalid header number");
    }

    // I don't know why, but it works
    const value = this.input.slice(this.pos - hashCount + 1, this.pos + 2);
    this.tokens.push(new Token(tokenType, value));
    this.pos += hashCount;
  }

  private addToken(type: TokenType) {
    const value = this.input[this.pos];
    this.tokens.push(new Token(type, value));
  }
}
