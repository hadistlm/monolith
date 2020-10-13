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
    admin.displayname = 'Administrator';
    admin.username = 'admin';
    admin.password = 'admin123';
    admin.email    = 'admin@mail.com';
    admin.role_id  = 1;
    admin.group_id = 1;
    await admin.save();

    const user = new User();
    user.displayname = 'User Internal';
    user.username = 'user';
    user.password = 'user123';
    user.email 	  = 'user@mail.com';
    user.role_id  = 2;
    user.group_id = 1;
    await user.save()
  }
}

module.exports = UserSeeder
