'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserGroupSchema extends Schema {
  up () {
    this.create('user_groups', (table) => {
      table.increments("group_id")
      table.string("group_name", 50).unique().notNullable()
      table.string("group_description")
      table.enu("group_type", ['internal', 'public']).notNullable().defaultTo('public')
      table.integer("group_status").unsigned().defaultTo(1)
      table.timestamps()

      // Index Key
      table.index(["group_name","group_status","group_type"], "MainIndex")
    })
  }

  down () {
    this.drop('user_groups')
  }
}

module.exports = UserGroupSchema
