 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoggedUsersController {
    
    public async loggeduser({view}: HttpContextContract){
        return view.render('documents.loggeduser')
    }
}
