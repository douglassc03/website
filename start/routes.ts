

import Route from '@ioc:Adonis/Core/Route'
//import UsersController from 'App/Controllers/Http/UsersController'

Route.get('/users', async ({ view }) => {
  return view.render('documents.index')
})  

/*Route.group(() => {
  Route.get('/', 'UsersController.index').as('index')
  Route.get('/:id', 'UsersController.show').as('show')
  Route.post('/', 'UsersController.store').as('store')  
})*/

Route.get('/users/:id', 'UsersController.show')
//Route.get('/users','documents.index')

Route.get('/homepage', async ({ view }) => {
  return view.render('documents.homepage')
})  


Route.get('/create', async ({ view }) => {
  return view.render('documents.create')
})  


