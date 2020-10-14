'use strict'

const User = use('App/Models/User')

class UserController {

	async index({request, response, view}){
	    const all = await User.all()
	    const res = {
	      status: 'success',
	      data: all,
	    }

	    return response.status(200).json(res)
	}

	async detail({request, response, view}){
	    const user = await User.find(params.id)

	    if (!user) {
	      const res = {
	        status: 'not found',
	        data: null,
	      }

	      return response.status(200).json(res)
	    }

	    const res = {
	      status: 'success',
	      data: user,
	    }

	    return response.status(200).json(res)
	}

	async store({request, response, view, session}){
	    const req = await request.only(['displayname','username','email','password','phone','picture'])
	    const user = new User()

	    user.displayname = req.displayname;
	    user.username = req.username;
	    user.password = req.password;
	    user.email 	  = req.email;
	    user.phone    = req.phone;
	    user.picture  = req.picture;
	    user.role_id  = 2;
	    user.group_id = 1;

	    const doStore = await user.save()
	    if (!doStore) {
	      const res = {
	        status: 'failed',
	        data: null,
	      }

	      return response.status(200).json(res);
	    }

	    return response.status(200).json({
	      status: 'success',
	      data: user,
	    });
	}

	async update({request, response, view, params, session}){
		const req  = await request.only(['displayname','username','email','password','phone','picture'])
	    const user = await User.find(params.id)

	    if (!user) {
	      const res = {
	        status: 'not found',
	        data: null,
	      }

	      return response.status(200).json(res)
	    }

	    user.displayname = req.displayname;
	    user.username = req.username;
	    user.password = req.password;
	    user.email 	  = req.email;
	    user.phone    = req.phone;
	    user.picture  = req.picture;
	    user.role_id  = 2;
	    user.group_id = 1;

	    const doUpdate = await user.save()
	    if (!doUpdate) {
	      const res = {
	        status: 'failed',
	        data: null,
	      }

	      return response.status(200).json(res)
	    }

	    return response.status(200).json({
	      status: 'success',
	      data: user,
	    });
	}

	async delete({request, response, view, params, session}){
	    const user = await User.find(params.id)

	    if (!user) {
	      	return response.status(200).json({
	        	status: 'not found',
	        	data: null,
	    	});
	    }

	    await user.delete()

	    return response.status(204).json(null)
	}
}

module.exports = UserController
