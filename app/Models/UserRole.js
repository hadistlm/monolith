'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserRole extends Model {
	// set Table
	static get table () {
	    return 'user_roles'
	}

	// hide column when retrieved
	static get hidden () {
	    return ['role_access']
	}
}

module.exports = UserRole
