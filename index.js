'use strict';
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');

function search(repos) {
	var repo = repos.shift();

	return ghGot('repos/' + repo.full_name + '/commits')
		.then(function (data) {
			if (data.body.length === 0) {
				return search(repos);
			}

			return repo;
		})
		.catch(function (err) {
			if (err.statusCode === 409) {
				return search(repos);
			}

			throw err;
		});
}

module.exports = function (user, opts) {
	if (typeof user !== 'string') {
		return Promise.reject(new TypeError('Expected a user'));
	}

	opts = opts || {};

	return ghGot('users/' + user + '/repos', {token: opts.token, query: {type: 'owner', sort: 'pushed'}})
		.then(function (data) {
			return search(data.body);
		});
};
