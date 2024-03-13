import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const users = [
    {
        id:1, text: "Olá",
    }
]


    export default class UsersController {
        public index({response}: HttpContextContract){ //objeto que vai retornar o response e view nas rotas
                return response.json(users)
    }
}
