const service = require('./service')

const main = async () => {
    try {
        const response = await service('a')
        const familyMembers = response.filter( person => person.name.toLowerCase().indexOf('skywalker') !== -1)
        const names = familyMembers.map(person => person.name)
        console.log('Names:',names)
    } catch (error) {
        console.error('Warning:',error)
    }
}
main()