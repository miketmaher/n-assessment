const generateShortUrl = require('../generateShortUrl');

test('Short URL format and length', () => {
  expect(typeof generateShortUrl()).toEqual('string');
  expect(generateShortUrl().length).toBe(7);
  expect(generateShortUrl().substring(5, 7)).toEqual('.m');
});
