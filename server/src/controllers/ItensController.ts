import {Request, Response} from 'express';
import knex from '../database/connection';

class ItensController {
    async index(request: Request, response: Response){
        const itens =  await knex('itens').select('*');
    
        //serializar os dados: transformar os dados para que sejam mais acessíveis pra quem usa
        const serializedItens = itens.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.107:3333/uploads/${item.image}`,
                // image_url: `http://localhost:3333/uploads/${item.image}`,
            }
        }) 
    
        return response.json(serializedItens);
    }
}

export default ItensController;