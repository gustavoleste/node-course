const {users,friends,posts} = require('./data')

const getUserByEmail = email => {
    return new Promise((resolve,reject) => {
        console.log('Getting user...')
        setTimeout(()=>{
            if(typeof email !== 'string'){
                return reject('Email should be a string')
            }
            const [user] = users.filter(user => user.email === email)
            if(typeof user === 'undefined'){
                return resolve([])
            }
            return resolve(user)
        },1000)
    })
}

const getFriendsByUser = userID => {
    console.log('Getting friends...')
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(typeof userID !== 'number'){
                return reject('UserID shold be a number')
            }
            const [userFriends] = friends.filter(user => user.id === userID)
            if(typeof userFriends === 'undefined'){
                return resolve([])
            }
            return resolve(userFriends.friends)
        },1000)
    })
}

const getPostsByUser = userID => {
    console.log('Getting posts...')
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(typeof userID !== 'number'){
                return reject('UserID shold be a number')
            }
            const userPosts = posts.filter(post => post.userID === userID)
            if(typeof userPosts === 'undefined'){
                return resolve({})
            }
            return resolve(userPosts.map(({id,message})=> ({id,message})))
        },1000)
    })
}

async function main(email) {
    try{
        const user = await getUserByEmail(email)
        const data = await Promise.all([getFriendsByUser(user.id), getPostsByUser(user.id)])
        const [friends,posts] = data
        console.log('Result:',{user,friends,posts})
    } catch(error){
        console.log('Warning',error)
    }
}

main('maria@email.com')