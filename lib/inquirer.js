const inquirer = require('inquirer');

const files = require('./files');

module.exports = {
    askGitHubCredentials:()=>{
        const questions = [
            {
                name:'Username',
                type:'input',
                message:'Enter your github username or e-mail address:',
                validate:function(value){
                    if(value.length){
                        return true;
                    }else{
                        return 'Please enter your username or e-mail address.'
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function(value) {
                    if (value.length) {
                    return true;
                    } else {
                    return 'Please enter your password.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    }
}