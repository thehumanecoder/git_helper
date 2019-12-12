const fs = require('fs');
const path = require('path');
const filepath = path.basename(process.cwd());

module.exports={
    getCurrentDirectoryBase:()=>{
        return path.basename(process.cwd);
    },

    directoryExists:()=>{
        return fs.existsSync(filepath);
    }
};