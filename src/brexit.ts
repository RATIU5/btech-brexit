import { marked } from "marked";
export function brexit(input: string, prefix: string = "btech-brexit") {
  const renderer = {
    heading(text: string, level: number) {
      switch (level) {
        case 1:
          return `<h${level} class="${prefix}-h1">${text}</h${level}>`;
        case 2:
          return `<h${level} class="${prefix}-h2">${text}</h${level}>`;
        case 3:
          return `<h${level} class="${prefix}-h3">${text}</h${level}>`;
        case 4:
          return `<h${level} class="${prefix}-h4">${text}</h${level}>`;
        case 5:
          return `<h${level} class="${prefix}-h5">${text}</h${level}>`;
        case 6:
          return `<h${level} class="${prefix}-h6">${text}</h${level}>`;
        default:
          return `<h${level}>${text}</h${level}>`;
      }
    },

    paragraph(text: string) {
      return `<p class="${prefix}-p">${text}</p>`;
    },

    hr() {
      return `<hr class="${prefix}-hr">`;
    },

    blockquote(quote: string) {
      return `<blockquote class="${prefix}-blockquote">${quote}</blockquote>`;
    },

    code(code: string, _: string) {
      return `<pre class="${prefix}-codeblock"><code class="${prefix}-code">${code}</code></pre>`;
    },

    list(body: string, ordered: boolean) {
      const tag = ordered ? "ol" : "ul";
      return `<${tag} class="${prefix}-list">${body}</${tag}>`;
    },

    listitem(text: string) {
      return `<li class="${prefix}-listitem">${text}</li>`;
    },

    checkbox(checked: boolean) {
      return `<input type="checkbox" class="${prefix}-checkbox" ${
        checked ? "checked" : ""
      }>`;
    },

    table(header: string, body: string) {
      return `<table class="${prefix}-table"><thead>${header}</thead><tbody>${body}</tbody></table>`;
    },

    tablerow(content: string) {
      return `<tr class="${prefix}-tablerow">${content}</tr>`;
    },

    tablecell(
      content: string,
      flags: { header: boolean; align: "center" | "left" | "right" | null }
    ) {
      return `<${
        flags.header ? "th" : "td"
      } class="${prefix}-tablecell" align="${flags.align}">${content}</${
        flags.header ? "th" : "td"
      }>`;
    },

    codespan(code: string) {
      return `<code class="${prefix}-codespan">${code}</code>`;
    },

    link(href: string, title: string, text: string) {
      return `<a class="${prefix}-link" href="${href}" title="${title}">${text}</a>`;
    },

    image(href: string, title: string, text: string) {
      return `<img class="${prefix}-image" src="${href}" title="${title}" alt="${text}">`;
    },
  };

  marked.use({
    breaks: true,
    gfm: true,
    mangle: false,
    headerIds: false,
  });

  marked.use({ renderer });
  return marked.parse(input);
}
