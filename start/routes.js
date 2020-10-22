'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// only accessible when user logged in
Route.group(() => {
	// User Routes
  	Route.get('user', 'UserController.index')
	Route.get('user/:id', 'UserController.detail')
	Route.post('user', 'UserController.store')
	Route.put('user/:id', 'UserController.update')
	Route.delete('user/:id', 'UserController.remove')

}).middleware(['auth'])

// Route login
Route.group(() => {
	Route.post('login', 'AuthController.login')
	Route.post('logout', 'AuthController.logout')
	Route.post('logged_auth', 'AuthController.logged_data')
	Route.get('csrf', 'AuthController.get_csrf')
}).prefix('auth')