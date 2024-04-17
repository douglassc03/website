 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoggedUsersController {
    
    public async loggeduser({view,auth}: HttpContextContract){
        await auth.use('web').authenticate()
        return view.render('documents.loggeduser')
    }
}



//PAGINA INICIAL LOGADA