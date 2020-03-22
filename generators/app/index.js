'use strict'

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


const prompts = {
  project: {
    type: 'input',
    name: 'project',
    message: 'What is the project name?',
    default: '',
    store: true,
  },
  description: {
    type: 'input',
    name: 'description',
    message: 'What is the project about?',
    default: '',
    store: true,
  },
  authorName: {
    type: 'input',
    name: 'author_name',
    message: 'Please, set the author name:',
    default: '',
    store: true,
  },
  authorEmail: {
    type: 'input',
    name: 'author_email',
    message: 'Please, set the author email:',
    default: '',
    store: true,
  },
  repositoryUrl: {
    type: 'input',
    name: 'repository_url',
    message: 'What is the repository url?',
    default: '',
  },
  package: {
    type: 'input',
    name: 'package',
    message: 'What is the name of the root package?',
    default: '',
    store: true,
  },
  version: {
    type: 'input',
    name: 'version',
    message: 'What is the initial version?',
    default: '0.0.0',
    store: true,
  }
};


module.exports = class extends Generator {
    prompting() {
      const greet = 'Welcome to ' + chalk.red('mechpig\'s python generator!');
      this.log(yosay(greet));

      return (
        this.prompt([
          prompts.project,
          prompts.description,
          prompts.authorName,
          prompts.authorEmail,
          prompts.repositoryUrl,
        ])
        .then(projectProps =>
          this.prompt([
            { ...prompts.package, default: projectProps.project },
            prompts.version,
          ])
          .then(packageProps => {
            this.props = {
              ...projectProps,
              ...packageProps,
            };
          })
        )
      );
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(this.props.project),
            this.props,
            {},
            { globOptions: { dot: true } },
        );
    }
};
