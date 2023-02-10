// users hardcoded for simplicity, store in a db for production applications
const users = [
    { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' },
    { id: 1, username: 'admin', password: 'password', firstName: 'Justin', lastName: 'St John' },
    { id: 1, username: 'test2', password: 'test', firstName: 'Test2', lastName: 'User2' },
    { id: 1, username: 'test3', password: 'test', firstName: 'Test3', lastName: 'User3' },
    { id: 1, username: 'test4', password: 'test', firstName: 'Test4', lastName: 'User4' }
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
