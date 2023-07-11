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
        tok = this.newHeadingToken();
        break;
      case "*":
        tok = this.newItalicBoldToken();
        break;
      case "-":
        tok = this.newMinusToken();
        break;
      case ">":
        if (this.peekChar() === " ") {
          tok = this.newToken(TokenType.QUOTE, ">");
          break;
        }
      case "~":
        tok = this.newToken(TokenType.STRIKE, "~");
        break;
      case "`":
        tok = this.newCodeToken();
        break;
      case "\0":
        tok = this.newToken(TokenType.EOF, "");
        break;
      default:
        tok = this.newToken(TokenType.TEXT, this.ch);
    }

    this.readChar();
    return tok;
  }

  newLinkNameToken(): Token {
    let tok: Token;
    while (this.peekChar() !== " " && this.peekChar() !== "]") {
      this.readChar();
    }
    tok = this.newToken(TokenType.TEXT, this.ch);
    return tok;
  }

  newCodeToken(): Token {
    let tok: Token;
    let backtickCount = 1;
    while (this.peekChar() === "`" && backtickCount < 4) {
      backtickCount++;
      this.readChar();
    }
    switch (backtickCount) {
      case 1:
        tok = this.newToken(TokenType.CODE, "`");
        break;
      case 3:
        tok = this.newToken(TokenType.CODE_BLOCK, "```");
        break;
      default:
        tok = this.newToken(TokenType.TEXT, this.ch);
    }
    return tok;
  }

  newMinusToken(): Token {
    let tok: Token;
    let minusCount = 1;

    if (this.peekChar() === " ") {
      tok = this.newToken(TokenType.LIST_ITEM, "-");
      return tok;
    }

    while (this.peekChar() === "-") {
      minusCount++;
      this.readChar();
    }

    if (minusCount === 3) {
      tok = this.newToken(TokenType.HORIZONTAL_RULE, "---");
      return tok;
    }

    return this.newToken(TokenType.TEXT, "-".repeat(minusCount));
  }

  newItalicBoldToken(): Token {
    let tok: Token;
    let asteriskCount = 1;
    while (this.peekChar() === "*" && asteriskCount < 4) {
      asteriskCount++;
      this.readChar();
    }
    switch (asteriskCount) {
      case 1:
        tok = this.newToken(TokenType.ITALIC, "*");
        break;
      case 2:
        tok = this.newToken(TokenType.BOLD, "**");
        break;
      case 3:
        tok = this.newToken(TokenType.BOLD_ITALIC, "***");
        break;
      default:
        throw new Error(
          "Invalid italic/bold found: " + "*".repeat(asteriskCount)
        );
    }
    return tok;
  }

  newHeadingToken(): Token {
    let tok: Token;
    let hashCount = 1;
    while (this.peekChar() === "#") {
      hashCount++;
      this.readChar();
    }
    switch (hashCount) {
      case 1:
        tok = this.newToken(TokenType.HEADING1, "#");
        break;
      case 2:
        tok = this.newToken(TokenType.HEADING2, "##");
        break;
      case 3:
        tok = this.newToken(TokenType.HEADING3, "###");
        break;
      case 4:
        tok = this.newToken(TokenType.HEADING4, "####");
        break;
      case 5:
        tok = this.newToken(TokenType.HEADING5, "#####");
        break;
      case 6:
        tok = this.newToken(TokenType.HEADING6, "######");
        break;
      default:
        throw new Error("Invalid heading found: " + "#".repeat(hashCount));
    }
    return tok;
  }
}
