const BASE = 27;
const MODULUS = 113;

/**
 *
 * @param {string} word - The word to be used for searching
 * @param {string} text - The text that may contain the searchable word
 * @returns {number} - The index of the matching word in the text.
 *  -1 returned if no match is found
 */
function rabinKarp(word, text) {
  const wordHashCode = hash(word);

  let hashCode;
  let wordSize = word.length;
  let previousWord;
  let currentWord;

  for (let i = 0; i <= text.length - wordSize; i++) {
    currentWord = text.substring(i, i + wordSize);

    if (!hashCode) {
      hashCode = hash(currentWord);
    } else {
      hashCode = roll(hashCode, previousWord, currentWord);
    }

    previousWord = currentWord;

    if (hashCode === wordHashCode && currentWord === word) {
      return i;
    }
  }

  return -1;
}

function hash(word) {
  let hashCode = 0;
  let index = 0;

  while(index < word.length) {    
    hashCode += word.charCodeAt(index) * Math.pow(BASE, (word.length - index) - 1);
    index++;
  }
  return hashCode % MODULUS;
}

function roll(previousHash, previousWord, currentWord) {
  let hashCode = previousHash;

  hashCode -= previousWord.charCodeAt(0) * Math.pow(BASE, previousWord.length - 1) % MODULUS;
  hashCode *= BASE;
  hashCode %= MODULUS;
  hashCode += currentWord.charCodeAt(currentWord.length - 1);
  hashCode %= MODULUS;

  return hashCode;
}

module.exports = rabinKarp;
