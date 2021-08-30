# Edit Distance Algorithm

Given two arrays of strings, compute the minimum number of operations (insertions, deletions and substitutions of symbols) required to transform one string into another.

## Example

A = "EDITING" & B = "DISTANCE"

For the purposes of constructing an alignment of the optimal distance, a ***-*** is used to denote an insertion or deletion.

The resulting optimal edit distance alignment of converting A to B is as follows:

![Alt text](example.png?raw=true "Title")

Given the cost of an insertion, deletion, mismatch is 1 and the cost of a match is 0, the edit distance of this problem is 5.

## Solution

The apprach used to solve this is based on the dynamic programming algorithm by **Wagner-Fischer**.

Refer: https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm

## Complexity

Given two strings of length ***n*** and ***m***, the time complexity of this approach is *O(nm)*. This is a significant improvement from the non-dynamic approach of solving this problem which takes exponential time.