'use strict'

class AuthController {
	async login ({ request, auth, response, session }) {
		const { email, password } = request.all();
		// first check if user already logged in or not
		const status = await auth.check().then(check => {
			return {'message': "You already logged in"}

		// user hasn't logged in yet
		}).catch(error => {
			// try to login using email and password provided
			return auth.attempt(email, password).then(user => {
	  			return {'message': 'Login Success'}
			}).catch(error => {
				return {'message': error.message.split(":").pop().trim()}
			});
		});

		return response.status(200).json(status);
	}

	async logout({ auth, response }) {
	 	await auth.logout()
	  	
	  	return response.status(200).send({ message: 'Logout successfully!'})
	}

	async logged_data({ auth, response }) {
		const user_data = await auth.getUser().then(user => {
			return user
		}).catch(error => {
			return {'message':"User hasn`t logged in yet"}
		});
	  	
	  	return response.status(200).send(user_data)
	}

	async get_csrf({response, session}) {
	    return response.json({token: session.get('csrf-secret')})
	}
}

module.exports = AuthController
