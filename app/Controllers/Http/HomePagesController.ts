import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomePagesController {

    public async homepage({view}: HttpContextContract){
        return view.render('documents.homepage')
    }

}

//PAGINA INICIAL