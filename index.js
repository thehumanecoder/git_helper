const files = require('./lib/files');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');

console.log(
    chalk.yellow(
        figlet.textSync('GIT Helper',{horizontalLayout:'full'}),
    ),
    chalk.blue('-By Biswas Sampad')
)

if(files.directoryExists('.git')){
    console.log(chalk.red('Already a git repository.Exiting process'));
    process.exit();
}else{
    console.log(chalk.green('Initializing .git repository'));
}

const run = async ()=>{
    const crednetials = await inquirer.askGitHubCredentials();
    console.log(crednetials);
}

run();