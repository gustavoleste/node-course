class NotImplementedException extends Error {
    constructor(){
        super('Not Impremented Exception')
    }
}

//INTEFACE
class ICrud {
    create(){
        throw new NotImplementedException()
    }

    read(){
        throw new NotImplementedException()
    }

    update(){
        throw new NotImplementedException()
    }

    delete(){
        throw new NotImplementedException()
    }
}

class MongoDBStrategy extends ICrud {
    constructor(){
        super()
    }

    create(item){
        console.log('MongoDB:',item)
    }
}

class PostegresDBStrategy extends ICrud {
    constructor(){
        super()
    }

    create(item){
        console.log('PostgresDB:',item)
    }
}

class ContextStrategy extends ICrud {
    constructor(database){
        super()
        this._database = database
    }

    create(item){
        return this._database.create(item)
    }

    read(id){
        return this._database.read(id)
    }

    update(id,item){
        return this._database.update(id,item)
    }

    delete(id){
        return this._database.delete(id)
    }
}

const contextWithMongo = new ContextStrategy(new MongoDBStrategy())
const contextWithPostgres = new ContextStrategy(new PostegresDBStrategy())

contextWithMongo.create({id:1,name:'luiz'})
contextWithPostgres.create({id:2,name:'gustavo'})