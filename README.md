# Custom element tag for github repository

[![demo](https://img.shields.io/badge/documentation-latest-green)](https://reddec.net/demo/github-card/)
[![license](https://img.shields.io/github/license/reddec/github-card.svg)](https://github.com/reddec/github-card)
[![donate](https://img.shields.io/badge/help_by️-donate❤-ff69b4)](http://reddec.net/about/#donate)

![github-card](https://user-images.githubusercontent.com/6597086/97158487-776b3980-17b4-11eb-80d3-4989c5e61785.png)


[Check online DEMO](https://reddec.net/demo/github-card/)

![image](https://user-images.githubusercontent.com/6597086/81782278-2c25dd00-952c-11ea-9d39-307a756733ee.png)

Minimal sample for embedding for the `sveltejs/svelte` repo

```html
<github-card repo="sveltejs/svelte">
<script defer src="https://cdn.jsdelivr.net/gh/reddec/github-card@1/dist/github-card.min.js"></script>
</github-card>
```

Additional flags:

* `flat="yes"` - disables card shadow
* `plain="yes"` - disables logo for the repository

## Features

* ultra light - 12KB without gzip (4.5KB - gzipped)
* easy to use
* caches information
* provides fallback if no JS available (or for old browsers)
* powered by Svelte

## Reason

I wanted to add nice Github card to my blog, but I didn't want to learn PHP (wordpress).


[![bymeacoffee](https://cdn.buymeacoffee.com/buttons/default-orange.png)](https://www.buymeacoffee.com/reddec)
