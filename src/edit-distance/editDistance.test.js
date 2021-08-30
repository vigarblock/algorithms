const editDistance = require("./editDistance");

describe("Edit-Distance", () => {
  it("Should return optimal edit distance and alignment", () => {
    // Arrange
    const A = ["E", "D", "I", "T", "I", "N", "G"];
    const B = ["D", "I", "S", "T", "A", "N", "C", "E"];

    const expectedOptimalAlignment = [
      ["E", "D", "I", "-", "T", "I", "N", "-", "G"],
      ["-", "D", "I", "S", "T", "A", "N", "C", "E"],
    ];
    const expectedOptimalDistance = 5;

    // Act
    const result = editDistance(A, B);

    // Assert
    expect(result.distance).toStrictEqual(expectedOptimalDistance);
    expect(result.alignment).toStrictEqual(expectedOptimalAlignment);
  });
});
