// const unicodeMax = Math.pow(2, 16) - 1;
const unicodeMax = 255;

/**
 *
 * @param {string} word - The word to be used for searching
 * @param {string} text - The text that may contain the searchable word
 * @returns {number} - The index of the matching word in the text.
 *  -1 returned if no match is found
 */
function rabinKarp(word, text) {
  const wordHash = computeHash(word);
  const m = word.length;

  let initialFrameHash = computeHash(text.slice(0, m));
  if (initialFrameHash === wordHash) {
    return 0;
  }

  let rollingHash = initialFrameHash;

  for (let i = m; i < text.length; i++) {
    const prevCharHashCode = computeHash(text.charAt(i - m), m - 1);
    const currentCharHashCode = computeHash(text.charAt(i));
    rollingHash = ((rollingHash - prevCharHashCode) * unicodeMax) + currentCharHashCode;
    
    if(rollingHash === wordHash) {
      return i - (m - 1);
    }
  }

  return -1;
}

function computeHash(word, startingExponent) {
  let hashCode = 0;
  let index = 0;
  let exponent = startingExponent || word.length - 1;

  while(index < word.length) {    
    hashCode += word.charCodeAt(index) * Math.pow(unicodeMax, exponent);
    index++;
    exponent--;
  }
  return hashCode;
}

module.exports = rabinKarp;
