//aca voy a configurar mi servidor

const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');
const cors = require('cors')
const dbOptions ={
    host: 'localhost',
    port: 3306,
    user:'maryUser',
    password: '1234maryli',
    database: 'libreria'
}

app.set('port', process.env.PORT || 9000);

//middelwares------------------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json())
app.use(cors())

// routes----------------------------------------------------------
app.get('/', (req,res) => {
    res.send('Bienvenidos a mi API')
})

app.use('/api', routes)

//servidor corriendo------------------------------------------------
app.listen(app.get('port'), () => {
    console.log('server corriendo en el puerto', app.get('port'))
})