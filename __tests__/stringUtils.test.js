const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('../stringUtils');

test('reverseString restituisce la stringa invertita', () => {
  expect(reverseString('ciao')).toBe('oaic');
  expect(reverseString('')).toBe('');
});

test('isPalindrome verifica correttamente le stringhe palindrome', () => {
  expect(isPalindrome('anna')).toBe(true);
  expect(isPalindrome('ciao')).toBe(false);
  expect(isPalindrome('')).toBe(true);
});

test('truncateString tronca correttamente la stringa', () => {
  expect(truncateString('abcdef', 4)).toBe('abcd');
  expect(truncateString('abc', 5)).toBe('abc');
  expect(truncateString('', 2)).toBe('');
});

test('countCharacters conta correttamente i caratteri', () => {
  expect(countCharacters('aabbc')).toEqual({ a: 2, b: 2, c: 1 });
  expect(countCharacters('')).toEqual({});
});
