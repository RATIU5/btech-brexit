export enum TokenType {
  ANY = "ANY",
  EOF = "EOF",
  HASH = "HASH",
}

export class Token {
  constructor(public type: TokenType, public value: string) {}
}
