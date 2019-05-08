const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command(
                    'list',
                    'Print table multiplicate in shell', options)
                .command(
                    'create', 
                    'Create file txt with table of multiplicate give the base', options)
                .help()
                .argv;

module.exports = {
    argv
}