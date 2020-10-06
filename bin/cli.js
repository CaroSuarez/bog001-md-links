#!/usr/bin/env node

const mdLinks = require("../src/index");
const stats = require("../src/5.stats");
const statsAndValidate = require("../src/6.statsAndValidate");

let argumentsArray = process.argv;
let dir = argumentsArray[2];
let nArguments = argumentsArray.length;
let option1 = argumentsArray[3];


const usageText = `
  mdLinks helps you find links inside markdown files and
  check its status code.

  usage:
    mdlinks <dir> <options>

    options can be:

    --validate:              used to check the status code to each link.
    --stats:                 used get the count of total and unique links. 
    --validate --stats:      used get the count of total, unique and broken links. 

    [!] Important note:
    Please enter a complete path or a path relative to the current working directory.
    
  `;

if (nArguments == 2) {
  console.log(usageText);
} else if (nArguments == 3) {
  mdLinks(dir).then((links) => console.log(links));
} else if ((nArguments == 4) & (option1 == "--validate")) {
  mdLinks(dir, { validate: true }).then((links) => {
    console.log(links);
  });
} else if ((nArguments == 4) & (option1 == "--stats")) {
  mdLinks(dir).then((links) => {
    console.log(stats(links));
  });
} else if (
  (nArguments == 5) &
  argumentsArray.includes("--validate") &
  argumentsArray.includes("--stats")
) {
  mdLinks(dir, { validate: true }).then((links) => {
    console.log(statsAndValidate(links));
  });
} else {
  console.log("Ups! Seems like you enter non valid options");
  console.log("--------------------------------------------");
  console.log(usageText);
}