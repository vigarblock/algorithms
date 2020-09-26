const rabinKarp = require('./rabinKarp');

describe('Rabin-Karp', () => {
  it('Should be able to search a single occurrence successfully', () => {
    // Arrange
    const word = "woohoo";
    const text = "This is some sample text with the search word woohoo";
    const expectedIndex = 46;

    // Act
    const result = rabinKarp(word, text);

    // Assert
    expect(result).toBe(expectedIndex);
  })
})