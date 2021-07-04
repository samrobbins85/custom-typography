## Custom Typography

A Tailwind CSS plugin based on the official Typography plugin, but with a variety of customizations

- Dark mode
- Syntax Highlighting
- Serif mode (inspired by Tufte.css and LaTeX.css)

This introduces two base classes:

- `prose` - the basic styling, always include this class
- `prose-serif` - serif styling, also needs the `prose` class applying

and two light classes:

- `prose-light` - light text matching with the `prose` class
- `prose-serifLight` light text matching with the `prose-serif` class

So the class list for normal font with dark mode would be

```
prose dark:prose-light
```

and the class list for serif font with dark mode would be

```
prose prose-serif dark:prose-serifLight
```
