const CLI = require('clui');
const Configstore = require('configstore');
const octokit = require('@octokit/rest');
const spinner = CLI.spinner;

const inquirer = require('./inquirer');
const pkg = require('../package.json');

const conf = new Configstore(pkg.name);

const status = new spinner('Authenticating with github, Please wait......');


let octokit;

module.exports={
    getInstance :()=>{
        return octokit;
    },

    getStoredGithubToken:()=>{
        return conf.get('github.token');
    },

    setGitHubCredentials:async()=>{
        const credentials = await inquirer.askGitHubCredentials();
        octokit = new octokit({
            auth:{
                username:credentials.username,
                password:credentials.password,
            },
            
        })
    }
}