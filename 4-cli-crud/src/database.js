const file = require('fs').promises

let databaseAdress = ''
const address = __dirname

async function init(name){
    databaseAdress = `${address}/${name}.txt`
    const data = await file.readFile(databaseAdress, 'utf-8').then( data => JSON.parse(data))
    if(data){
        return database
    }
    await file.writeFile(databaseAdress,JSON.stringify([]),'utf-8')
    return database
}

async function show(id){
    const dataSnapshot = await file.readFile(databaseAdress, 'utf-8').then( data => JSON.parse(data))
    if(id){
        const [record] = dataSnapshot.filter( item => item.id === parseInt(id))
        return record ? {status: 'success',data: record} : {status: 'success',data: {}} 
    }
    return {
        status: 'success',
        data: dataSnapshot
    }
}

async function add(record){
    if(record){
        const dataSnapshot = await file.readFile(databaseAdress, 'utf-8').then( data => JSON.parse(data)) 
        dataSnapshot.push({id: Date.now(),...record})
        await file.writeFile(databaseAdress, JSON.stringify(dataSnapshot), 'utf-8')
        return {
            status: 'success',
            message: 'record added with success'
        }
    }
    return {
        status:'fail',
        message:'record parameter is required'
    }
}

async function update(id,data){
    if(id){
        const dataSnapshot = await file.readFile(databaseAdress, 'utf-8').then( data => JSON.parse(data))
        const [record] = dataSnapshot.filter( item => item.id === parseInt(id))
        const dataFiltred = dataSnapshot.filter( item => item.id !== parseInt(id))
        dataFiltred.push({...record, ...data})
        await file.writeFile(databaseAdress, JSON.stringify(dataFiltred), 'utf-8')
        return {
            status:'success',
            message:'record updated with success'
        }
    }
    return {
        status:'fail',
        message:'id parameter is required'
    }
}

async function del(id){
    if(id){
        const dataSnapshot = await file.readFile(databaseAdress, 'utf-8').then( data => JSON.parse(data))
        const dataFiltred = dataSnapshot.filter( item => item.id !== parseInt(id))
        await file.writeFile(databaseAdress, JSON.stringify(dataFiltred), 'utf-8')
        return {
            status:'success',
            message:'record deleted with success'
        }
    }
    return {
        status:'fail',
        message:'id parameter is required'
    }
}

const database = {
    add,
    show,
    update,
    del
}

module.exports = init
