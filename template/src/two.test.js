// @flow
const execa = require('execa');

test('async test', async () => {
  const result = await execa('./stress-cpu.sh', ['1']);
  expect(result.stdout).toBe('done');
});
