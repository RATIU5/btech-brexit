import { marked } from "marked";
import highlight from "highlight.js/lib/common";
import "highlight.js/styles/github.css";
export function brexit(input, prefix = "btech-brexit") {
    const renderer = {
        heading(text, level) {
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
        paragraph(text) {
            return `<p class="${prefix}-p">${text}</p>`;
        },
        hr() {
            return `<hr class="${prefix}-hr">`;
        },
        blockquote(quote) {
            return `<blockquote class="${prefix}-blockquote">${quote}</blockquote>`;
        },
        code(code, language) {
            const html = highlight.highlight(code, { language }).value;
            return `<pre class="${prefix}-codeblock"><code class="${prefix}-code hljs">${html}</code></pre>`;
        },
        list(body, ordered) {
            const tag = ordered ? "ol" : "ul";
            return `<${tag} class="${prefix}-list">${body}</${tag}>`;
        },
        listitem(text) {
            return `<li class="${prefix}-listitem">${text}</li>`;
        },
        checkbox(checked) {
            return `<input type="checkbox" class="${prefix}-checkbox" ${checked ? "checked" : ""}>`;
        },
        table(header, body) {
            return `<div class="${prefix}-table-container"><table class="${prefix}-table"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
        },
        tablerow(content) {
            return `<tr class="${prefix}-tablerow">${content}</tr>`;
        },
        tablecell(content, flags) {
            return `<${flags.header ? "th" : "td"} class="${prefix}-tablecell" align="${flags.align}">${content}</${flags.header ? "th" : "td"}>`;
        },
        codespan(code) {
            return `<code class="${prefix}-codespan">${code}</code>`;
        },
        link(href, title, text) {
            return `<a class="${prefix}-link" href="${href}" title="${title}">${text}</a>`;
        },
        image(href, title, text) {
            return `<img class="${prefix}-image" src="${href}" title="${title}" alt="${text}">`;
        },
    };
    const toggleBlock = {
        name: "cut-block",
        level: "block",
        start(src) {
            const match = src.match(/^{%\s*cut/);
            return match ? match.index : Infinity;
        },
        tokenizer(src, tokens) {
            const rule = /^{%\s*cut\s*"([^"]*)"\s*%}\s*([\s\S]*?)\s*{%\s*end\s*%}/g;
            const match = rule.exec(src);
            if (match) {
                let token = {
                    type: "cut-block",
                    raw: match[0],
                    title: match[1],
                    body: match[2],
                    tokens: [],
                };
                this.lexer.inline(token.body, token.tokens);
                return token;
            }
        },
        renderer(token) {
            return `<details class="${prefix}-cut"><summary class="${prefix}-cut-title">${token.title}</summary><div class="${prefix}-cut-body">${this.parser.parseInline(token.tokens)}</div></details>`;
        },
    };
    const alertBlock = {
        name: "alert-block",
        level: "block",
        start(src) {
            const match = src.match(/^{%\s*alert/);
            return match ? match.index : Infinity;
        },
        tokenizer(src, tokens) {
            const rule = /^{%\s*alert\s*(.*?)\s*"([^"]*)"\s*%}\s*([^{%]*)\s*{%\s*end\s*%}/gs;
            const match = rule.exec(src);
            if (match) {
                const token = {
                    type: "alert-block",
                    raw: match[0],
                    color: match[1],
                    title: match[2],
                    body: match[3],
                    tokens: [],
                };
                this.lexer.inline(token.body, token.tokens);
                return token;
            }
        },
        renderer(token) {
            return `<div class="${prefix}-${token.color} ${prefix}-alert"><p class="${prefix}-alert-title">${token.title}</p><p>${token.body}</p></div>`;
        }
    };
    marked.use({ extensions: [toggleBlock, alertBlock] });
    marked.use({
        breaks: true,
        gfm: true,
        mangle: false,
        headerIds: false,
    });
    marked.use({ renderer });
    return `<div class="${prefix}-page">${marked.parse(input)}</div>`;
}
