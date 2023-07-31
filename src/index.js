const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const bodyParser = require('body-parser');
const db = require('./models/index');
// const {City, Airport} = require('./models/index');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, async ()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
    }
    
    // const airports = await city.getAirports();
    // console.log(airports);
})