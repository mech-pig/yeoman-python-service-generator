'use strict'

const Generator = require('yeoman-generator');
const chalk = require('chalk')
const yosay = require('yosay')


module.exports = class extends Generator {
    prompting() {
        const greet = 'Welcome to ' + chalk.red('mechpig\'s python generator!');
        this.log(yosay(greet));

        const prompts = [
            {
                type: 'input',
                name: 'project',
                message: 'What is project name?',
                default: '',
                store: true
            },
            {
                type: 'input',
                name: 'package',
                message: 'What is the name of the root package?',
                default: '',
                store: true
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the package about?',
                default: '',
                store: true
            },
            {
                type: 'input',
                name: 'author',
                message: 'Please, set the author name:',
                default: '',
                store: true
            },
            {
                type: 'input',
                name: 'version',
                message: 'What is the initial version?',
                default: '0.0.0',
                store: true
            }
        ];

        return this.prompt(prompts).then(props => {
            this.log(props);
            this.props = props;
        });
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
