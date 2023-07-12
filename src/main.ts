import { marked } from "marked";

const renderer = {
  heading(text: string, level: number) {
    switch (level) {
      case 1:
        return `<h${level} class="btech-brexit-h1">${text}</h${level}>`;
      case 2:
        return `<h${level} class="btech-brexit-h2">${text}</h${level}>`;
      case 3:
        return `<h${level} class="btech-brexit-h3">${text}</h${level}>`;
      case 4:
        return `<h${level} class="btech-brexit-h4">${text}</h${level}>`;
      case 5:
        return `<h${level} class="btech-brexit-h5">${text}</h${level}>`;
      case 6:
        return `<h${level} class="btech-brexit-h6">${text}</h${level}>`;
      default:
        return `<h${level}>${text}</h${level}>`;
    }
  },

  paragraph(text: string) {
    return `<p class="btech-brexit-p">${text}</p>`;
  },

  hr() {
    return `<hr class="btech-brexit-hr">`;
  },
};

marked.use({
  breaks: true,
  gfm: true,
  mangle: false,
  headerIds: false,
});
marked.use({ renderer });

const input = `
### Features

For interface design, a more practical approach is to simply pick values by hand. You don’t have to worry about subpixel rounding errors this way, and you have total control over which sizes exist instead of outsourcing that job to some mathematical formula.

- Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);
- Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;
- Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;
- Support identification, interpretation, fliter of the HTML tags;
- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;
- Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;

# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


**Table of Contents**

---

# H1 header
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore. Unde voluptates fuga vitae dicta eaque pariatur impedit earum laudantium voluptas! Eius eos tempora fugit quidem repellendus odit? Repudiandae eaque eum placeat minima possimus odit reiciendis voluptate, itaque et impedit sunt beatae nemo ab excepturi dolore delectus, aspernatur voluptatem enim accusantium, id porro debitis?

Sit ut ab laboriosam officiis inventore aperiam accusamus. Quam magni numquam necessitatibus. Recusandae reiciendis distinctio culpa placeat sint fugit, repudiandae, consequatur assumenda, vel dolores ex? Vero rem doloribus quaerat exercitationem minima officiis, suscipit, voluptatibus harum obcaecati quia doloremque tempore illum laudantium vitae sunt aut at! Harum!

## H2 header
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore. Unde voluptates fuga vitae dicta eaque pariatur impedit earum laudantium voluptas! Eius eos tempora fugit quidem repellendus odit? Repudiandae eaque eum placeat minima possimus odit reiciendis voluptate, itaque et impedit sunt beatae nemo ab excepturi dolore delectus, aspernatur voluptatem enim accusantium, id porro debitis? Sit ut ab laboriosam officiis inventore aperiam accusamus. Quam magni numquam necessitatibus. Recusandae reiciendis distinctio culpa placeat sint fugit, repudiandae, consequatur assumenda, vel dolores ex? Vero rem doloribus quaerat exercitationem minima officiis, suscipit, voluptatibus harum obcaecati quia doloremque tempore illum laudantium vitae sunt aut at! Harum!

### H3 header
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore. Unde voluptates fuga vitae dicta eaque pariatur impedit earum laudantium voluptas! Eius eos tempora fugit quidem repellendus odit? Repudiandae eaque eum placeat minima possimus odit reiciendis voluptate, itaque et impedit sunt beatae nemo ab excepturi dolore delectus, aspernatur voluptatem enim accusantium, id porro debitis?

Sit ut ab laboriosam officiis inventore aperiam accusamus. Quam magni numquam necessitatibus. Recusandae reiciendis distinctio culpa placeat sint fugit, repudiandae, consequatur assumenda, vel dolores ex? Vero rem doloribus quaerat exercitationem minima officiis, suscipit, voluptatibus harum obcaecati quia doloremque tempore illum laudantium vitae sunt aut at! Harum!

#### H4 header
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore. Unde voluptates fuga vitae dicta eaque pariatur impedit earum laudantium voluptas! Eius eos tempora fugit quidem repellendus odit? Repudiandae eaque eum placeat minima possimus odit reiciendis voluptate, itaque et impedit sunt beatae nemo ab excepturi dolore delectus, aspernatur voluptatem enim accusantium, id porro debitis? Sit ut ab laboriosam officiis inventore aperiam accusamus. Quam magni numquam necessitatibus. Recusandae reiciendis distinctio culpa placeat sint fugit, repudiandae, consequatur assumenda, vel dolores ex? Vero rem doloribus quaerat exercitationem minima officiis, suscipit, voluptatibus harum obcaecati quia doloremque tempore illum laudantium vitae sunt aut at! Harum!

##### H5 header
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore. Unde voluptates fuga vitae dicta eaque pariatur impedit earum laudantium voluptas! Eius eos tempora fugit quidem repellendus odit? Repudiandae eaque eum placeat minima possimus odit reiciendis voluptate, itaque et impedit sunt beatae nemo ab excepturi dolore delectus, aspernatur voluptatem enim accusantium, id porro debitis? Sit ut ab laboriosam officiis inventore aperiam accusamus. Quam magni numquam necessitatibus. Recusandae reiciendis distinctio culpa placeat sint fugit, repudiandae, consequatur assumenda, vel dolores ex? Vero rem doloribus quaerat exercitationem minima officiis, suscipit, voluptatibus harum obcaecati quia doloremque tempore illum laudantium vitae sunt aut at! Harum!

###### H6 header
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore. Unde voluptates fuga vitae dicta eaque pariatur impedit earum laudantium voluptas! Eius eos tempora fugit quidem repellendus odit? Repudiandae eaque eum placeat minima possimus odit reiciendis voluptate, itaque et impedit sunt beatae nemo ab excepturi dolore delectus, aspernatur voluptatem enim accusantium, id porro debitis? Sit ut ab laboriosam officiis inventore aperiam accusamus. Quam magni numquam necessitatibus. Recusandae reiciendis distinctio culpa placeat sint fugit, repudiandae, consequatur assumenda, vel dolores ex? Vero rem doloribus quaerat exercitationem minima officiis, suscipit, voluptatibus harum obcaecati quia doloremque tempore illum laudantium vitae sunt aut at! Harum!

# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

## Headers (Underline)

H1 Header (Underline)
=============

H2 Header (Underline)
-------------

###Characters
                
----

~~Strikethrough~~ <s>Strikethrough (when enable html tag decode.)</s>
*Italic*      _Italic_
**Emphasis**  __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___

Superscript: X<sub>2</sub>，Subscript: O<sup>2</sup>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### Blockquotes

> Blockquotes

Paragraphs and Line Breaks
                    
> "Blockquotes Blockquotes", [Link](http://localhost/)。

### Links

[Links](http://localhost/)

[Links with title](http://localhost/ "link title")

\`<link>\` : <https://github.com>

[Reference link][id/name] 

[id/name]: http://link-url/

GFM a-tail link @pandao

### Code Blocks (multi-language) & highlighting

#### Inline code

\`$ npm install marked\`

#### Code Blocks (Indented style)

Indented 4 spaces, like \`<pre>\` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>
    
Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### Javascript　

\`\`\`javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
\`\`\`

#### HTML code

\`\`\`html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
\`\`\`

### Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩 Xiamen

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面
                
----

### Lists

#### Unordered list (-)

- Item A
- Item B
- Item C
     
#### Unordered list (*)

* Item A
* Item B
* Item C

#### Unordered list (plus sign and nested)
                
+ Item A
+ Item B
    + Item B 1
    + Item B 2
    + Item B 3
+ Item C
    * Item C 1
    * Item C 2
    * Item C 3

#### Ordered list
                
1. Item A
2. Item B
3. Item C
                
----
                    
### Tables
                    
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| \`help()\`      | Display the help window.       |
| \`destroy()\`   | **Destroy your computer!**     |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
                
----

#### HTML entities

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

## Escaping for Special Characters

\\*literal asterisks\\*

### End
`;

const res = marked.parse(input);
console.log(res);
const parser = new DOMParser();
const documentContent = parser.parseFromString(res, "text/html");
console.log(documentContent);
const appElement = document.querySelector("#app");
if (appElement) {
  Array.from(documentContent.body.children).forEach((child) => {
    appElement.appendChild(child);
  });
}
