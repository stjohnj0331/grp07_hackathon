﻿// users hardcoded for simplicity, store in a db for production applications
const users = [
    { id: 1, username: 'admin', password: 'password', firstName: 'Test', lastName: 'User' },
    { id: 2, username: 'Bethany Marquardt', password: 'password', firstName: 'Bethany', lastName: 'Marquardt' },
    { id: 3, username: 'Kieran Marcus', password: 'password', firstName: 'Kieran', lastName: 'Marcus' },
    { id: 4, username: 'Corey Schimmel', password: 'password', firstName: 'Corey', lastName: 'Schimmel' }
];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}
