'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserGroup extends Model {
	// set Table
	static get table () {
	    return 'user_groups'
	}
}

module.exports = UserGroup
