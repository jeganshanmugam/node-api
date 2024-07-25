import fileSystem from 'fs';
import logger = require('./sample')

console.log('FileSytem ');

const files = fileSystem.readdirSync('./')

console.log(files);

fileSystem.readdir('./',(err, files) => {
    if (err) {
        console.log('Err ' + err)
    } else {
        console.log('files ' + files)
    }
})

console.log('Generating error');

fileSystem.readdir('#',(err, files) => {
    if (err) {
        console.log('Err ' + err)
    } else {
        console.log('files ' + files)
    }
})