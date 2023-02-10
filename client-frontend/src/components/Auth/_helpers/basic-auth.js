const userService = require('../users/user.service');

module.exports = basicAuth;

async function basicAuth(req, res, next) {
    // make authenticate path public
    if (req.path === '/users/authenticate') {
        return next();
    }

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    //passes to user.service.authenticate to test the UN/PW
    const user = await userService.authenticate({ username, password });
    //failure
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }
    // success
    // attach user to request object
    req.user = user
    console.log(user)
    next();
}