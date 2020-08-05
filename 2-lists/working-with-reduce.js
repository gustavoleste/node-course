const service = require('./service')

const main = async () => {
    try {
        const response = await service('a')
        const members = response.map( person => parseInt(person.height))
        const totalHeight = members.reduce( (total,currentValue) => total + currentValue,0)
        console.log('Total Height:',totalHeight)
    } catch (error) {
        console.error('Warning:',error)
    }
}
main()