// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of 'questions for user input
inquirer
    .prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What do I need to install for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage of your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choice a license that relates to your project.',
        // Possible licenses are 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'
        choices: [
            'Apache_2.0',
            'GPLv3',
            'MIT',
            'BSD_3',
            'None'
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would you like your application to contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run your project.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
])
.then((data) => {
    fs.writeFile(`README.md`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
});