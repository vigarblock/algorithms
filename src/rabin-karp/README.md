# Rabin-Karp Algorithm

Created by Richard M. Karp and Michael O. Rabin (1987), the Rabin-Karp or Karp-Rabin algorithm is a string searching algorithm which uses hashing to find patterns within a given text.

## Steps
Given a **word** (the search pattern) and **text** (the string which might contain the search pattern)

1. Compute the hash of the **word**
2. Compute the substring hash of the first m characters of the **text** (where m = length of string **word**)
3. Compare the substring hash against the **word** hash. If they are equal, perform a character comparison to ensure the two strings are equal.
4. If they are not equal, skip the starting character of the previous substring and compute the substring hash of the next m characters of the **text**. Repeat until a match is found or all characters of the **text** have been traversed.

## Hash function

The implementation of this algorithm uses polynomial string hashing with multiplications and additions.

> H = c<sub>1</sub> * a<sup>k-1</sup> + c<sub>2</sub> * a<sup>k-2</sup> + ... + c<sub>k</sub> * a<sup>0</sup>

where *a* is a constant and *c<sub>1</sub>... c<sub>k</sub>* are the input characters.

When the number of input characters are large, the value of *H* can drastically increase. In order to prevent integer overflows, all math is done in modulo *Q*. Keep in mind that this is done at the expense of increased hash value collisions.

To simply the evaluation of the polynomial and allow the usage of the modulo operator at each step, **Horner's method** is used in this implementation. This is essential for preventing integer overflows.

## Rolling Hash

In *Step 4*, the hash is computed in a sliding window of *m* characters. Notice that each time the window slides over by a character, we are removing one character and adding a new character to the already computed hash. Instead of recomputing the hash of *m* characters each time the window slides over, we can use the fact that we are removing one character from the previous hash and adding a new character to compute the new hash. This approach is known as the rolling hash computation.

> Rolling Hash = (h - c<sub>s</sub>) * a + c<sub>n</sub>

where *h* is the previous hash value, *c<sub>s</sub>* is the skipped character and *c<sub>n</sub>* is the new character added to the window.

**Note** To avoid integer overflows, the above computation needs to be done in modular arithmetic as well.

## Complexity

Given a word of length *m* and a text of length *n*, its best case time complexity is *O(n + m)* and space complexity is *O(m)*. The worst case time complexity is *O(nm)*. This can occur when an extremely poor performing hash function is chosen, which can result in many false positives at each step.