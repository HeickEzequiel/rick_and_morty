const server = require ("./app.js")
const PORT = 3001;
const { conn } = require("./DB_connection.js");

conn.sync({ force: false})
    .then(() => { 
      server.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
       });
})
    .catch(error => console.log(error.message))