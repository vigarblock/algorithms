const BASE = 256;
const MODULUS = 997;

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

  for (let i = 0; i < word.length; i++) {
    hashCode *= BASE;
    hashCode += word.charCodeAt(i);
    hashCode %= MODULUS;
  }

  return hashCode;
}

function roll(previousHash, previousWord, currentWord) {
  let hashCode = previousHash;

  // Precompute multiplier
  let multiplier = 1;
  for (let i = 1; i < previousWord.length; i++) {
    multiplier *= BASE;
    multiplier %= MODULUS;
  }

  // Ensure non-negative hash by adding the modulus value
  hashCode += MODULUS;

  // Use multiplier to calculate and deduct the skipped character from rolling window
  hashCode -= (multiplier * previousWord.charCodeAt(0)) % MODULUS;

  // Multiply by base to restore order of new frame
  hashCode *= BASE;

  // Add the new character to the hash code
  hashCode += currentWord.charCodeAt(currentWord.length - 1);

  // Compute modulus to prevent integer overflow
  hashCode %= MODULUS;

  return hashCode;
}

module.exports = rabinKarp;
