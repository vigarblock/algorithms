# Rabin-Karp Algorithm

Created by Richard M. Karp and Michael O. Rabin (1987), the Rabin-Karp or Karp-Rabin algorithm is a string searching algorithm which uses hashing to find patterns within a given text.

## Steps
Given a **word** (the search pattern) and **text** (the string which might contain the search pattern)

1. Compute the hash of the **word**
2. Compute the substring hash of the first m characters of the **text** (where m = length of string **word**)
3. Compare the substring hash against the **word** hash. If they are equal, perform a character comparison to ensure the two strings are equal.
4. If they are not equal, skip the starting character of the previous substring and compute the substring hash of the next m characters of the **text**. Repeat until a match is found or all characters of the **text** have been traversed. This step is known as the rolling hash subroutine.

## Hash function

The implementation of this algorithm uses polynomial string hashing with multiplications and additions.

> H = c<sub>1</sub> * a<sup>k-1</sup> + c<sub>2</sub> * a<sup>k-2</sup> + ... + c<sub>k</sub> * a<sup>0</sup>

where *a* is a constant and *c<sub>1</sub>... c<sub>k</sub>* are the input characters.

When the number of input characters are large, the value of *H* can drastically increase. In order to prevent integer overflows, all math is done in modulo *Q*.

To allow the usage of the modulo operator at each step, **Horner's method** is used in this implementation. Keep in mind that this is done at the expense of increased hash value collisions.

## Rolling Hash

## Complexity