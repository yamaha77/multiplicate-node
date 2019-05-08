const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {

    console.log('==============='.green);
    console.log(`Table of ${ base }`.green);
    console.log('==============='.green);

    for(let i = 1; i <= limit; i++ ){
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let createFile = (base, limit) => {

    return new Promise( (resolve, reject) => {

        if (!Number(base) || !Number(limit)) {
            reject('Value(s) entered not valid')
        }

        let info = "";

        for (let i = 1; i <= limit; i++) {
            info += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tables/table-${base}.txt`, info, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`table-${base}.txt`);
        });
    })
}

module.exports = { 
    createFile,
    listTable 
}
