const session = require("express-session");
const FileStore = require('session-file-store')(session);
const sessionMiddleware = session({ 
    store:new FileStore({
    	path: './redis'
    }),
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
 }) 
module.exports = sessionMiddleware;