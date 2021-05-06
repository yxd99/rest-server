const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //MIDDLEWARES
        this.middlewares();

        //Routes for my application REST
        this.routes();
    }
    middlewares(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.send('Hello World');
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Project hosted in http://localhost:${this.port}`);
        })
    }

}

module.exports = Server;