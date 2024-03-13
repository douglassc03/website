import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const users = [
    {
        id:1, text: "Olá",
    },
    {
        id:2, text: "Oi",
    }
]


    export default class UsersController {
        public index({response}: HttpContextContract){ //objeto que vai retornar o response e view nas rotas
                return response.json(users)
    }

    public show({response,params}: HttpContextContract){
        const user = users[params.id]
        return response.json(user)
    }




}
