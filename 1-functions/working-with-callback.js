const {users,friends,posts} = require('./data')

const getUserByEmail = (email,callback) => {
    setTimeout(()=>{
        let error = null
        if(typeof email !== 'string'){
            error = 'Email should be a string'
            return callback(error,{})
        }
        const [user] = users.filter(user => user.email === email)
        if(typeof user === 'undefined'){
            return callback(error,{})
        }
        return callback(error,user)
    },1000)
}

const getFriendsByUserID = (userID,callback) => {
    setTimeout(()=>{
        let error = null
        if(typeof userID !== 'number'){
            error = 'UserID shold be a number'
            return callback(error,{})
        }
        const [user] = friends.filter(user => user.id === userID)
        if(typeof user === 'undefined'){
            return callback(error,{})
        }
        return callback(error,user.friends)
    },1000)
}

const getPostsByUserID = (userID,callback) => {
    setTimeout(()=>{
        let error = null
        if(typeof userID !== 'number'){
            error = 'UserID shold be a number'
            return callback(error,{})
        }
        const userPosts = posts.filter(post => post.userID === userID)
        if(typeof userPosts === 'undefined'){
            return callback(error,{})
        }
        return callback(error,userPosts)
    },1000)
}

const userResolver = (error,user) => {
    if(error){
        console.error('Warning:',error)
        return
    }
    console.log('User details:', user)
}

const friendsResolver = (error,friends) => {
    if(error){
        console.error('Warning:',error)
        return
    }
    console.log('Friends:',friends)
}

const postsResolver = (error,posts) => {
    if(error){
        console.error('Warning:',error)
        return
    }
    console.log('Posts:',posts)
}

//getUserByEmail('maria@email.com.br',userResolver)
//getFriendsByUserID(1,friendsResolver)
//getPostsByUserID(1,postsResolver)

const getUserDetailsByEmail = email => {
    if(typeof email !== 'string'){
        throw new Error('email should be a string')
    }
    console.log('Await... Seach for user...')
    getUserByEmail(email,(error,user) => {
        if(error){
            console.error('Warning:',error)
            return
        }
        getFriendsByUserID(user.id, (error1,friends) => {
            if(error1){
                console.error('Warning',error1)
                return
            }
            getPostsByUserID(user.id, (error2,userPosts) => {
                if(error2){
                    console.error('Warning',error2)
                    return
                }
                const userDetails = {
                    user,
                    friends,
                    posts: userPosts.map(({id,message}) => ({postID:id, message}))
                }
                console.log('User details:',userDetails)
            })
        })
    })
}

getUserDetailsByEmail('maria@email.com')