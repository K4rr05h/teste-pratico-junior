const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    async query (text, params) {
        const start = Date.now();
        const res = await pool.query(text, params);
        return pool.query(text, params, ( err, res ) => {
            const duration = Date.now() - start;
            console.log('query executada:' , { text, duration, rows: res.rowCount })
            return res;
        })
    }
,
//Tratamento de excessões do client 
    async getClient ( ) {

        const client = await pool.connect();
        const query = client.query();
        const release = client.release;

        //verificação de 5 segundos

        const timeout = setTimeout (() => {
            console.error("verificação de 5 segundos. Última query executada:");
            console.error(client.lastQuery);
        }, 5000)

        //mantém a query guardada
        
        client.query = (...args) => {
            client.lastQuery = args;
            return query.apply ( client, args );
        }

        client.release = () => {
            //resetando tempo
            clearTimeout( timeout );

            //resetando a função
            client.query = query;
            client.release = release;
            return release.apply( client );
        }
        return client;
    }
}