import { Token, TokenType } from "./token";

export class Lexer {
  private input: string = ""; // input string
  private position: number = 0; // current position in input (points to current char)
  private readPosition: number = 0; // current reading position in input (after current char)
  private ch: string = "\0"; // current char under examination

  constructor(input: string) {
    this.input = input;
    this.readChar();
  }

  readChar() {
    if (this.readPosition >= this.input.length) {
      this.ch = "\0";
    } else {
      this.ch = this.input[this.readPosition]; // readPosition is the next char
    }
    this.position = this.readPosition;
    this.readPosition += 1;
  }

  newToken(tokenType: TokenType, ch: string): Token {
    return new Token(tokenType, ch);
  }

  peekChar(): string {
    if (this.readPosition >= this.input.length) {
      return "\0";
    } else {
      return this.input[this.readPosition];
    }
  }

  nextToken(): Token {
    let tok: Token;

    switch (this.ch) {
      case "#":
        tok = this.newToken(TokenType.HASH, this.ch);
        break;
      case "\0":
        tok = this.newToken(TokenType.EOF, "");
        break;
      default:
        tok = this.newToken(TokenType.ANY, this.ch);
    }

    this.readChar();
    return tok;
  }
}
