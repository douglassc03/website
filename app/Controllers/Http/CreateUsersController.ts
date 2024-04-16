import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUsersController {
    public async index({view}: HttpContextContract){
        return view.render('documents/create')
    }

}


//CRIAR CONTA