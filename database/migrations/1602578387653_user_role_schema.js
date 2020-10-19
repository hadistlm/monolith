'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRoleSchema extends Schema {
    up() {
        this.create('user_roles', (table) => {
            table.increments("role_id")
            table.string("role_name", 100).unique().notNullable()
            table.text("role_description")
            table.text("role_access")
            table.integer("role_status").unsigned().defaultTo(1)
            table.timestamps()

            // Index Key
            table.index(["role_name", "role_status"], "RoleIndex")
        })
    }

    down() {
        this.drop('user_roles')
    }
}

module.exports = UserRoleSchema