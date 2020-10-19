'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestingSchema extends Schema {
  up () {
    this.create('testings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('testings')
  }
}

module.exports = TestingSchema
