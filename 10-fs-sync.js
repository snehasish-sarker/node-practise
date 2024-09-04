const fs = require('fs')

const file1 = fs.readFileSync('./content/text/file1.txt', 'utf8')
const file2 = fs.readFileSync('./content/text/file2.txt', 'utf8')

fs.writeFileSync('./content/text/fileSync.txt', `${file1} ${file2}`)

console.log(file1)