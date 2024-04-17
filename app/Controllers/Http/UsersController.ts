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

        public show({response,params}: HttpContextContract){
            const user = users[params.id]
            return response.json(user)
        }

        public async index({view}: HttpContextContract){            
            return view.render('documents.users')
        }

    }
