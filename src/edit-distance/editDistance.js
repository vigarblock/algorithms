/**
 *
 * @param {string} a - An array of characters
 * @param {string} b - An array of characters
 * @returns {object} - Returns the resulting edit distance and alignment array
 */
function editDistance(a, b) {
  const n = a.length;
  const m = b.length;

  // Initialize by constructing the matrix and setting default values
  const d = initialize(n, m);

  // Compute the minimum cost of each operation throughout the matrix
  for (let j = 1; j <= m; j++) {
    for (let i = 1; i <= n; i++) {
      dInsertion = d[i][j - 1] + 1;
      dDeletion = d[i - 1][j] + 1;
      dMatch = d[i - 1][j - 1];
      dMismatch = d[i - 1][j - 1] + 1;

      if (a[i - 1] === b[j - 1]) {
        d[i][j] = Math.min(dInsertion, dDeletion, dMatch);
      } else {
        d[i][j] = Math.min(dInsertion, dDeletion, dMismatch);
      }
    }
  }

  // Compute the alignment in a 2D array.
  const output = [[], []];

  const outputAlignment = (i, j) => {
    if (i == 0 && j == 0) {
      return;
    }

    const deletionBacktrack = d[i][j] === d[i - 1][j] + 1;
    const insertionBacktrack = d[i][j] === d[i][j - 1] + 1;
    if (i > 0 && deletionBacktrack) {
      outputAlignment(i - 1, j);
      output[0].push(a[i - 1]);
      output[1].push("-");
    } else if (j > 0 && insertionBacktrack) {
      outputAlignment(i, j - 1);
      output[0].push("-");
      output[1].push(b[j - 1]);
    } else {
      // match/mismatch backtrack
      outputAlignment(i - 1, j - 1);
      output[0].push(a[i - 1]);
      output[1].push(b[j - 1]);
    }
  };

  outputAlignment(n - 1, m - 1);
  output[0].push(a[n - 1]);
  output[1].push(b[m - 1]);

  return { alignment: output, distance: d[n][m] };
}

function initialize(n, m) {
  let d = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    d[i][0] = i;
  }

  for (let j = 0; j <= m; j++) {
    d[0][j] = j;
  }

  return d;
}

module.exports = editDistance;
