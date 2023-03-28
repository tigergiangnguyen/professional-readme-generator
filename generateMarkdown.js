// TODO: Create a function that returns a license badge based on which license is passed in

const { default: Choices } = require("inquirer/lib/objects/choices");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== Choices) {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== Choices) {
    return `[License](#license)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== Choices) {
    return `A high-quality README file is the license, this is liscensed by ${license}.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Content

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions and know to contact me.
  
  My email is ${data.email}
  
  GitHub: (https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown;
