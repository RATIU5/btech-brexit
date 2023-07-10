export enum TokenType {
  TEXT = "TEXT",
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  H6 = "H6",
}

export class Token {
  constructor(public type: TokenType, public value: string) {}
}
