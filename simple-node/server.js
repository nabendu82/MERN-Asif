const fs = require('fs');

const writeAndappend = () => {
    fs.writeFileSync('notepad.txt', 'I live in Bhopal.');
    fs.appendFileSync('notepad.txt', 'I teach Full-stack development & Mobile development.');
}

module.exports = writeAndappend;