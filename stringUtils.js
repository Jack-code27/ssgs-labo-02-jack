function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function truncateString(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) : str;
}

function countCharacters(str) {
  return [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

module.exports = {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
};
