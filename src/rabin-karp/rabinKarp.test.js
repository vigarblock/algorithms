const rabinKarp = require('./rabinKarp');

describe('Rabin-Karp', () => {
  it('Should be able to search a single occurrence', () => {
    // Arrange
    const word = "Woohoo";
    const text = "This is some sample text with the search word Woohoo";
    const expectedIndex = 46;

    // Act
    const result = rabinKarp(word, text);

    // Assert
    expect(result).toBe(expectedIndex);
  })

  it('Should be able to search a single occurrence with special characters', () => {
    // Arrange
    const word = "*star*@#";
    const text = "This is some sample text with the search word *star*@#";
    const expectedIndex = 46;

    // Act
    const result = rabinKarp(word, text);

    // Assert
    expect(result).toBe(expectedIndex);
  })

  it('Should be able to return the index of the first occurrence of many matches', () => {
    // Arrange
    const word = "woohoo";
    const text = "This is some sample text with the search word woohoo and one more woohoo";
    const expectedIndex = 46;

    // Act
    const result = rabinKarp(word, text);

    // Assert
    expect(result).toBe(expectedIndex);
  })

  it('Should be able to return -1 if no match is found', () => {
    // Arrange
    const word = "woohoo";
    const text = "This is some sample text";
    const expectedIndex = -1;

    // Act
    const result = rabinKarp(word, text);

    // Assert
    expect(result).toBe(expectedIndex);
  })
})