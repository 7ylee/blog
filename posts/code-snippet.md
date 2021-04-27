---
title: code snippet
desc: some description for meta description
---

# Code Snippet test

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio hic eaque eum quis nemo cum pariatur et, quod officiis id nobis dolore porro tempora labore quam aut rem exercitationem iusto mollitia qui? Ratione fugiat recusandae quidem quasi facilis numquam debitis tempora? Optio quod voluptas aut beatae tenetur cupiditate doloremque nulla.

## js snippets

Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit nulla veniam soluta nesciunt consequatur.

``` js
// Versions: marked v0.6.2, prismjs v1.15.0

let marked = require('marked');
let prism = require('prismjs');
let loadLanguages = require('prismjs/components/');

loadLanguages(['javascript', 'jsx', 'css', 'markup', 'bash', 'json']);

marked.setOptions({
  highlight: function(code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  }
});

let someMarkdown = "```javascript\nlet x = 2;```";

let html = marked.parse(someMarkdown)
```

## jsx

Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, atque.

``` jsx
const Article = ({ slug, html, frontmatter }) => {
    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <meta title="description" content={frontmatter.desc} />
            </Head>
            <article dangerouslySetInnerHTML={{ __html: html }} />
        </>
    );
};
```

## html

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure consectetur eius iusto quis repellendus nihil, dignissimos molestias sapiente corporis rerum?

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```
