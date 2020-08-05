const service = require('./service')

const main = async () => {
    try {
        const response = await service('a')
        const forEachNames = []
        response.forEach( person => {
            forEachNames.push(person.name)
        });
        const mapNames = response.map( (person, index) => `[${index}] - ${person.name}`)
        console.log('forEachNames:',forEachNames)
        console.log('mapNames:',mapNames)
    } catch (error) {
        console.error('Warning:',error)
    }
}
main()