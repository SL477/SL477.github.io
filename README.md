# SL477.github.io

GitHub Pages
This is the code for my GitHub Pages site

Install ruby

```bash
gem install jekyll bundler
bundle install
```

Use "bundle exec jekyll serve" to run locally and then browse to [localhost:4000](http://localhost:4000/)

```bash
bundle exec jekyll serve --livereload
```

Use "bundle info --path minima" to get the original templates to update

## React

The React pages now live on [my react repo](https://github.com/SL477/Link477-React) and are live on [its pages](https://link477.com/Link477-React/).

## FOAF file

To visualise use [the visualiser](https://foaf-visualizer.gnu.org.ua/?uri=https://link477.com/foaf.rdf)

To edit it use [the foaf-a-matic](http://ldodds.com/foaf/foaf-a-matic.en.html)

## StyleLint

Use

```bash
npx stylelint "**/*.*css"
```

## Validations

<p>
    <a href="https://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Flink477.com&usermedium=all&vextwarning=&warning=1">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>

<a href="http://validator.w3.org/feed/check.cgi?url=https%3A//link477.com/feed.xml"><img src="/assets/images/valid-atom.png" alt="[Valid Atom 1.0]" title="Validate my Atom 1.0 feed" /></a>

<a href="http://validator.w3.org/feed/check.cgi?url=https%3A//link477.com/feed_rss.xml"><img src="/assets/images/valid-rss-rogers.png" alt="[Valid RSS]" title="Validate my RSS feed" /></a>

## Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
