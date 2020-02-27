// index.js

/**
 * Required External Modules
 */

const server = require('./api/server');  
 

/**
 * Server Variables
 */

 const port = process.env.PORT || '5555'; 

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */

 server.get('/', (req, res) => {
     res.status(200).send('Hello: World')
 });

/**
 * Server Activation
 */

 server.listen(port, () => {
     console.log(`\n*** Listening on ${port} ***\n`)
 })