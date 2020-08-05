const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()
const {users,friends,posts} = require('./data')

myEventEmitter.on('users', () => console.log('Users:',users))

myEventEmitter.on('friends', () => console.log('Freinds:',friends))

myEventEmitter.on('posts', () => console.log('Posts:',posts))

console.log('Commands: users, posts, friends:')
process.stdin.on('data', data => {
    const input = data.toString().trim().toLowerCase()
    switch(input){
        case 'users':
            console.clear()
            myEventEmitter.emit(input)
            console.log('Commands: users, posts, friends:')
            break
        case 'friends':
            console.clear()
            myEventEmitter.emit(input)
            console.log('Commands: users, posts, friends:')
            break
        case 'posts':
            console.clear()
            myEventEmitter.emit(input)
            console.log('Commands: users, posts, friends:')
            break
        default:
            console.clear()
            console.log('command not found')
            console.log('Commands: users, posts, friends:')
            break
    }
})