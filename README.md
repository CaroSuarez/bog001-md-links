# md-links

## Installation

`npm install -g carosuarez/md-links`

## Description

The **md-links** package allows you to find all links inside a markdown file and check total number of links if any, unique links and broken links. You can also scan folders in which case it will search for markdown files inside. 

## Usage

* You can use it as programmatically as follows:

```
const md-links = require('@carosuarez/md-links');
```

In this case, `md-links` returns a promise which resolves in an array of objects that specify the links found, their texts and the absolute path of the markdown file scaned. 

```
md-links('C:/Desktop/Example').then(links => console.log(links));
```

You can also check for the status code of the links found adding the option:


```
md-links('C:/Desktop/Example', {validate : true}).then(links => console.log(links));
```



* Use it as CLI:

`mdlinks <path>`

Shows the array of objects that specify the links found, their texts and the absolute path of the markdown file scaned in the given path. 


`mdlinks <path> --validate`

Shows the same array as before included the status code for each link.

`mdlinks <path> --validate --stats`

Shows count of total, unique and broke links found.



