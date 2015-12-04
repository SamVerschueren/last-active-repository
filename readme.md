# last-active-repository [![Build Status](https://travis-ci.org/SamVerschueren/last-active-repository.svg?branch=master)](https://travis-ci.org/SamVerschueren/last-active-repository)

> Retrieve a user's last active GitHub repository.


## Install

```
$ npm install --save last-active-repository
```


## Usage

```js
const repository = require('last-active-repository');

repository('SamVerschueren', {token: 'github-token'}).then(repo => {
	//=> repository object
});
```


## API

### repository(user, [options])

Returns a promise for the last active repository

#### user

Type: `string`

The user to retrieve the last active repository for.

#### options

##### token

Type: `string`

GitHub [access token](https://github.com/settings/tokens/new).

Can be overriden globally with the `GITHUB_TOKEN` environment variable.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
