import knex from 'knex';
import path from 'path'; //biblioteca do node para padronizar caminhos de pastas e etc



const connection = knex({
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;