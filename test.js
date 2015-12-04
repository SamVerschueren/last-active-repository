import test from 'ava';
import fn from './';

test('error', async t => {
	await t.throws(fn(), 'Expected a user');
});

test('result', async t => {
	const repo = await fn('SamVerschueren');
	t.is(repo.full_name, 'SamVerschueren/last-active-repository');
});
