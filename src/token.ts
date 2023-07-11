export enum TokenType {
  TEXT = "TEXT",
  EOF = "EOF",
  HASH = "HASH",
  HEADING1 = "HEADING1",
  HEADING2 = "HEADING2",
  HEADING3 = "HEADING3",
  HEADING4 = "HEADING4",
  HEADING5 = "HEADING5",
  HEADING6 = "HEADING6",
  ASTERISK = "ASTERISK",
  ITALIC = "ITALIC",
  BOLD = "BOLD",
  BOLD_ITALIC = "BOLD_ITALIC",
  LIST_ITEM = "LIST_ITEM",
  QUOTE = "QUOTE",
  HORIZONTAL_RULE = "HORIZONTAL_RULE",
  STRIKE = "STRIKE",
  CODE = "CODE",
  CODE_BLOCK = "CODE_BLOCK",
}

export class Token {
  constructor(public type: TokenType, public value: string) {}
}
