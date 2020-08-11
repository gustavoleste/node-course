const {program} = require('commander')
const database = require('./database')

async function main(){
    const data = await database('email-list')
    program
        .version('v1')
        .command('add')
        .description('add a new record')
        .requiredOption('-u, --user <value>', 'user name')
        .requiredOption('-e, --email <value>', 'user email')
        .action(async opt => {
            const {user:name, email} = opt
            const response = await data.add({name,email})
            console.log(response)
        })

    program.command('show')
        .description('List records')
        .option('-i, --id <value>', 'user id')
        .action(async opt => {
            const {id} = opt
            const response = await data.show(id)
            console.log(response)
        })

    program.command('delete')
            .description('delete a record')
            .requiredOption('-i, --id <value>', 'record id')
            .action(async opt => {
                const {id} = opt
                const response = await data.del(id)
                console.log(response)
            })

    program.command('update')
            .description('update a record')
            .requiredOption('-i,  --id <value>', 'record id')
            .requiredOption('-u, --user <value>', 'user name')
            .requiredOption('-e, --email <value>', 'user email')    
            .action(async opt => {
                const {id,user:name,email} = opt
                const response = await data.update(id,{name,email})
                console.log(response)
            })
            
    program.parse(process.argv)
}

main()
