import uuid from 'uuid';

const users = [{
    id: "1",
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
}, {
    id: uuid(),
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: uuid(),
    name: 'Mike',
    email: 'mike@example.com'
}]

const posts = [{
    id: "10",
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: users[0].id
}, {
    id: uuid(),
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: users[0].id
}, {
    id: uuid(),
    title: 'Programming Music',
    body: '',
    published: false,
    author: users[1].id
}]

const comments = [{
    id: "100",
    text: "You're the best",
    author: users[1].id,
    post: posts[0].id
}, {
    id: uuid(),
    text: "Terrible!",
    author: users[2].id,
    post: posts[1].id
}, {
    id: uuid(),
    text: "Awesome!",
    author: users[0].id,
    post: posts[1].id
}, {
    id: uuid(),
    text: "Awestruck",
    author: users[2].id,
    post: posts[2].id
}]

const db = {
    users, 
    posts,
    comments
}

export {db as default} 