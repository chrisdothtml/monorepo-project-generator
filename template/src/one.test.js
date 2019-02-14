// @flow
const execa = require('execa');

test('sync test', () => {
  const result = execa.sync('./stress-cpu.sh', ['1']);
  expect(result.stdout).toBe('done');
});

test('async test', async () => {
  const result = await execa('./stress-cpu.sh', ['1']);
  expect(result.stdout).toBe('done');
});
