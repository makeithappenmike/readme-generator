// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Hello! What's your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What's your Github Username?",
        name: "username",
        validate: async (input) => {
            if (!input) {
               return 'Please enter a Github Username..';
            }
            return true;
         }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        // validate: async (input) => {
        //     if (!input) {
        //        return 'Please enter an email address..';
        //     }
        //     return true;
        //  },
        validate: function(email) {
            // Regex mail check (return true if valid mail)
            // Credit to https://gist.github.com/Amitabh-K for the email regex below
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
    },
    {
        type: "input",
        message: "Nice to meet you {NAME}. What's your new project called?",
        name: "title",
        validate: async (input) => {
            if (!input) {
               return 'Every great project starts with a great Title. I must insist.';
            }
            return true;
         }
    },
    {
        type: "input",
        message: "Sounds amazing. Can you tell me a bit more about the project? Try to answer the following questions: What was your motivation? What problem does it solve? What's unique about it?'",
        name: "description"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of licensing should this project have?',
        choices: ['MIT', 'GNU GPLv3', 'None']
    },
    {
        type: "input",
        message: "What steps can be taken to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "After installation, how can I use it? Also, how does someone use the app in the real world?",
        name: "usage"
    },
    {
        type: "input",
        message: "Any notable contributors you want to mention? How can other contribute to the project in the future?",
        name: "contributing"
    }, 
    {
        type: "input",
        message: "Are their any tests written for this project? How can additional tests be written by others?",
        name: "tests"
    }
];

// Run inquirer
inquirer
  .prompt(questions)
  .then((response) => {
    // Define individual responses
    var name = response.name;
    if (!name) {
        name = "";
    } else {
        name = "<p />By " + name;
    };
    var username = "\nFind me on Github at https://github.com/" + response.username.toLowerCase() + "<p/>";
    var email = "You can reach me at " + response.email.toLowerCase() + " if you have any questions.";
    var title = response.title;
    var description = response.description;
    if (!description) {
        description = "TBD";
    };
    var toc = "[Installation](#installation)<br />[Usage](#usage)<br />[License](#license)<br />[Contributing](#contributing)<br />[Tests](#tests)<br />[Questions](#questions)";
    var installation = response.installation;
    if (!installation) {
        installation = "TBD";
    };
    var usage = response.usage;
    if (!usage) {
        usage = "TBD";
    };
    var licensing = "This project is licensed under the " + response.license + " license.";
    var licenseDesc = "";
    var badge = "";
    if (licensing === "This project is licensed under the GNU GPLv3 license.") {
        badge = "\n\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n";
        licenseDesc = "\nPermissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.<p />For more information visit https://choosealicense.com/licenses/gpl-3.0/.";
    } else if (licensing === "This project is licensed under the MIT license.") {
        badge = "\n\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
        licenseDesc = "\nA short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.<p />For more information visit https://choosealicense.com/licenses/mit/.";
    } else if (licensing === "This project is licensed under the None license.") {
        badge = "";
        licenseDesc = "";
        licensing = "This project is not currently licensed.";
    };
    var contributing = response.contributing;
    if (!contributing) {
        contributing = "TBD";
    };
    var tests = response.tests;
    if (!tests) {
        tests = "TBD";
    };
    var readMe = "# " + title + "\n" + name + "\n" + badge + "\n## Description\n" + description + "\n## Table of Contents\n" + toc + "\n## Installation\n" + installation + "\n## Usage\n" + usage + "\n## License\n" + licensing + "\n" + licenseDesc + "\n## Contributing\n" + contributing + "\n## Tests\n" + tests + "\n## Questions" + username + email;
    writeToFile(readMe);
});

// TODO: Create a function to write README file
function writeToFile(readMe) {
    fs.writeFile("README(New).md", readMe, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("README(New).md", "utf8"));
        }
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
