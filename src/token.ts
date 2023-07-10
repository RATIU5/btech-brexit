export enum TokenType {
  TEXT,
  HEADER1,
  HEADER2,
  HEADER3,
  HEADER4,
  HEADER5,
  HEADER6,
  BOLD,
  ITALIC,
  LINK,
  CODE,
  LIST,
  LINE,
}

export class Token {
  constructor(public type: TokenType, public value: string) {}
}
