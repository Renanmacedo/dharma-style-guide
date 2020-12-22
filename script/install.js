const fs = require("fs");

const copyFileSync = (source, destination) => {

    const readFile = fs.readFileSync(source);
    const writeFile = fs.writeFileSync(destination, readFile);

};

const readArgs = () => {
    if(!_hasProcess()) return;

    const args = process.argv.slice(2);
}

const _hasProcess = () => {
    
    return !!process.argv.length
}