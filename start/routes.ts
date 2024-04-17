import Route from '@ioc:Adonis/Core/Route'

Route.get('/users', async ({ view }) => {
  return view.render('documents.users')
})  


Route.get('/homepage', async ({ view }) => {
  return view.render('documents.homepage')
})  


Route.get('/create', async ({ view }) => {
  return view.render('documents.create')
})  


Route.get('/logged', async ({ view }) => {
  return view.render('documents.loggeduser')
})  
