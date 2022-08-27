// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Hello, what is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your Github Username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "Nice to meet you {NAME}. What's your new project called?",
        name: "title"
    },
    {
        type: "input",
        message: "Sounds amazing. Can you tell me a bit more about the project? Try to answer the following questions: What was your motivation? What problem does it solve? What's unique about it?'",
        name: "description",
    },
    {
        type: 'list',
        name: 'licensing',
        message: 'What type of licensing should this project have?',
        choices: ['MIT License', 'GNU GPLv3'],
    },
    // {
    //     type: "input",
    //     message: "What steps can be taken to install your project?",
    //     name: "installation"
    // },
    // {
    //     type: "input",
    //     message: "After installation, how can I use it? Also, how does someone use the app in the real world?",
    //     name: "usage"
    // },
    // {
    //     type: "input",
    //     message: "Any notable contributors you want to mention? How can other contribute to the project in the future?",
    //     name: "contributions"
    // }, 
    // {
    //     type: "input",
    //     message: "Are their any tests written for this project? How can additional tests be written by others?",
    //     name: "testing"
    // }, 
    // {
    //     type: "input",
    //     message: "Where can questions be asked?",
    //     name: "howtoask"
    // }
];

// Run inquirer
inquirer
  .prompt(questions)
  .then((response) => {
    // Define individual responses
    var name = response.name;
    var username = response.username;
    var email = response.email;
    var title = response.title;
    var description = response.description;
    var toc = "[Installation](#installation)<br />[Usage](#usage)<br />[Licensing](#licensing)<br />[Contributions](#contributions)<br />[Testing](#testing)<br />[howtoask](#howtoask)";
    var installation = response.installation;
    var usage = response.usage;
    var licensing = response.licensing;
    var badge = "";
    if (licensing === "GNU GPLv3") {
        badge = "\n\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n";
        licenseDesc = "\nPermissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.<p />For more information visit https://choosealicense.com/licenses/gpl-3.0/.";
    } else {
        badge = "\n\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
        licenseDesc = "\nA short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.<p />For more information visit https://choosealicense.com/licenses/mit/.";
    };
    var contributions = response.contributions;
    var testing = response.testing;
    var howtoask = response.howtoask;
    console.log(response);
    console.log("Name:", name);
    console.log("Title:", title);
    var readMe = "# " + title + "\n By " + name + "\n" + badge + "\n## Description\n" + description + "\n## Table of Contents\n" + toc + "\n## Installation\n" + installation + "\n## Usage\n" + usage + "\n## Licensing\n This project is licensed under the " + licensing + ".\n" + licenseDesc + "\n## Contributions\n" + contributions + "\n## Testing\n" + testing + "\n## How to Ask Questions\n" + howtoask + ".<p />Find me on Github at https://github.com/" + username + ".<p />You can reach me at " + email + " if you have any questions.";
    writeToFile(readMe);
    // console.log("Description:", response.description);
    // console.log("TOC:", response.toc);
    // console.log("Installation:", response.installation);
    // console.log("Usage:", response.usage);
    // console.log("Licensing:", response.licensing);
    // console.log("Contributions:", response.contributions);
    // console.log("Testing:", response.testing);
    // console.log("How To Ask Questions:", response.howtoask);
});

// TODO: Create a function to write README file
function writeToFile(readMe) {
    fs.writeFile("README.md", readMe, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("README.md", "utf8"));
        }
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
