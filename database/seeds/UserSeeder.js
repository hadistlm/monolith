'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const User = use('App/Models/User');

class UserSeeder {
  async run () {
  	const admin = new User();
    admin.name 	   = 'Administrator';
    admin.username = 'admin';
    admin.password = 'admin123';
    admin.email    = 'admin@mail.com';
    await admin.save();

    const user = new User();
    user.name 	  = 'User';
    user.username = 'user';
    user.password = 'user123';
    user.email 	  = 'user@mail.com';
    await user.save()
  }
}

module.exports = UserSeeder
