const service = require('./service')

const main = async () => {
    try {
        const response = await service('a')

        let forNames = []
        let forInNames = []
        let forOfNames = []

        console.time('for-loop')
        for(let i = 0; i <= response.length - 1; i++){
            const person = response[i]
            forNames.push(person.name)
        }
        console.timeEnd('for-loop')

        console.time('forIn-loop')
        for( let i in response){
            const person = response[i]
            forInNames.push(person.name)
        }
        console.timeEnd('forIn-loop')
        
        console.time('forOf-loop')
        for( person of response){
            forOfNames.push(person.name)
        }
        console.timeEnd('forOf-loop')
    } catch (error) {
        console.error('Warning:',error)
    }
}
main()