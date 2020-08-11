const database = require('../database')
const file = require('fs').promises
const initialState = require('./mockData')

describe('Databse Tests', () => {
    let data = {}
    const records = initialState
    beforeAll( async () => {
        data = await database('test')
    })
    afterAll( async () => {
        await file.writeFile('src/test.txt',JSON.stringify(records),'utf-8')
    })
    describe('Happy Path', () => {
        it('should return return all records when call show function without parameters', async () => {
            const output = await data.show()
            const expected = {
                status: 'success',
                data: records
            }
            expect(output).toEqual(expected)
        })
        it('should returns a specific record when call show function with id as a parameter', async () => {
            const output = await data.show('1597077327040')
            const expected = {
                status: 'success',
                data: records[0]
            }
            expect(output).toEqual(expected)
        })
        it('should return a success message when call add function with the correct parameters', async () => {
            const output = await data.add({name: 'mary', email:'mary@email.com'})
            const expected = {status:'success',message:'record added with success'}
            expect(output).toEqual(expected)
        })
        it('should return a success message when call update function with the correct parameters', async () => {
            const output = await data.update('1597077327040',{name:'luiz gustavo',email:'lgustavo@email.com'})
            const expected = {status:'success',message:'record updated with success'}
            expect(output).toEqual(expected)
        })
        it('should return a success message when call del function with id as a parameter', async () => {
            const output = await data.del('1597077327040')
            const expected = {status:'success',message:'record deleted with success'}
            expect(output).toEqual(expected)
        })
    })
    describe('Unhappy Path', () => {
        it('should return a failed massage when call add function without parameters', async () => {
            const output = await data.add()
            const expected = {status:'fail',message:'record parameter is required'}
            expect(output).toEqual(expected)
        })
        it('should return a failed message when call update function without the id parameter', async () => {
            const output = await data.update()
            const expected = {status:'fail',message:'id parameter is required'}
            expect(output).toEqual(expected)
        })
        it('should return a failed message when call del function without the id parameter', async () => {
            const output = await data.del()
            const expected = {status:'fail',message:'id parameter is required'}
            expect(output).toEqual(expected)
        })
    })
})