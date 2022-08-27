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
        message: "Nice to meet you {NAME}. What's your new project called?",
        name: "title"
    },
    // {
    //     type: "input",
    //     message: "Sounds amazing. Can you tell me a bit more about the project? Try to answer the following questions: What was your motivation? What problem does it solve? What's unique about it?'",
    //     name: "description",
    // },
    // {                               
    //     type: "checkbox",
    //     message: "Do you want to add a Table of Contents?",
    //     choices: ["yes", "no"],
    //     name: "toc"

    // },
    // {
    //     type: "input",
    //     message: "What steps can be taken to install your project?",
    //     name: "installation"
    // },
    // {
    //     type: "input",
    //     message: "After installalation, how can I use it? Also, how does someone use the app in the real world?",
    //     name: "usage"
    // },  
    // {
    //     type: "input",
    //     message: "What kind of licensing does this project have? Are there any restrictions on how it can be used?",
    //     name: "licensing"
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
    var title = response.title;
    var description = response.description;
    var toc = response.toc;
    var installalation = response.installalation;
    var usage = response.usage;
    var licensing = response.licensing;
    var contributions = response.contributions;
    var testing = response.testing;
    var howtoask = response.howtoask;
    console.log(response);
    console.log("Name:", name);
    console.log("Title:", title);
    writeToFile(response);
    // console.log("Description:", response.description);
    // console.log("TOC:", response.toc);
    // console.log("Installation:", response.installalation);
    // console.log("Usage:", response.usage);
    // console.log("Licensing:", response.licensing);
    // console.log("Contributions:", response.contributions);
    // console.log("Testing:", response.testing);
    // console.log("How To Ask Questions:", response.howtoask);
});

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile("README.md", JSON.stringify(response), (err) => {
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
