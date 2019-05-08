const colors = require('colors');

const { argv } = require('./config/yargs');
const { createFile, listTable } = require('./multiplicate/multiplicate');

let _command = argv._[0];

switch ( _command ) {

    case 'create':
        createFile(argv.base, argv.limit)
            .then( file => console.log(`File created: ${ colors.green(file)}`))
            .catch( err => console.log(err));
        break;

    case 'list':
        listTable(argv.base, argv.limit);
        break; 

    default:
        console.log('Command not found');
        break;
}

