const { readFile, writeFile } = require('fs')

readFile('./content/text/file1.txt', 'utf8', (error, result)=>{
    if(error){
        console.error(error)
    }

    const first = result

    readFile('./content/text/file2.txt', 'utf8', (error, result)=>{
        if(error){
            console.error(error)
        }

        const second = result

        writeFile('./content/text/fileSync.txt', `it is working ${first} ${second}`, (error, result)=>{
            console.log('HELLO WORLD')
        })
    })



})