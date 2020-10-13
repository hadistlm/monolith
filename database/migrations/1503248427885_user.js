'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('displayname', 100).notNullable()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('phone', 25).nullable()
      table.string('picture', 50).nullable()
      table.integer('role_id', 1).notNullable().unsigned()
      table.integer('group_id', 1).notNullable().unsigned()
      table.timestamps()

      // Index Key
      table.index(["username","email","role_id","group_id"], "MainIndex")
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
