const users = [
    {
        id: 1,
        name: 'Felipe Vargas',
        email: 'felipe@email.com'
    },
    {
        id: 2,
        name: 'Maria Freitas',
        email: 'maria@email.com'
    },
    {
        id: 3,
        name: 'Luiza Oliveira',
        email: 'luiza@email.com'
    }
]

const friends = [
    {
        id: 1,
        userID: 1,
        friends: [
            'Mary',
            'Susan',
            'Terry'
        ]
    },
    {
        id: 2,
        userID: 2,
        friends: [
            'Ted',
            'Aron',
            'Phill'
        ]
    },
    {
        id: 3,
        userID: 3,
        friends: [
            'Derli',
            'Cida',
            'Pedro'
        ]
    },
]

const posts = [
    {
        id:1,
        userID: 2,
        message: 'Hello World'
    },
    {
        id:2,
        userID: 1,
        message: 'Good Morning!'
    },
    {
        id:3,
        userID: 3,
        message: 'Hello There.'
    },
    {
        id:4,
        userID: 2,
        message: 'Today a have a nice day'
    }
]

module.exports = {
    users,
    friends,
    posts
}