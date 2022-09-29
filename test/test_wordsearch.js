//////////Jaxson Baerg & Ning Li//////////
const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'O', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'BOB');

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontally but backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'O', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'N', 'H', 'O', 'J', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JOHN');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically but upside-down", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'O', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'N', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'H', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'O', 'E', 'R', 'L'],
      ['B', 'F', 'N', 'H', 'J', 'Z', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JOHN');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally going down", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'L', 'I', 'N', 'O', 'E', 'L', 'D'],
      ['Y', 'F', 'B', 'F', 'N', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'E', 'H', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'R', 'E', 'R', 'L'],
      ['B', 'F', 'N', 'H', 'J', 'T', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ALBERT');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally going up", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'L', 'I', 'N', 'O', 'T', 'L', 'D'],
      ['Y', 'F', 'Z', 'F', 'R', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'E', 'H', 'V', 'R', 'G'],
      ['W', 'H', 'B', 'S', 'R', 'E', 'R', 'L'],
      ['B', 'L', 'N', 'H', 'J', 'T', 'Y', 'B'],
      ['A', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ALBERT');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally going down but backwards", function() {
    const result = wordSearch([
      ['T', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'R', 'I', 'N', 'O', 'T', 'L', 'D'],
      ['Y', 'F', 'E', 'F', 'R', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'B', 'H', 'V', 'R', 'G'],
      ['W', 'H', 'B', 'S', 'L', 'E', 'R', 'L'],
      ['B', 'L', 'N', 'H', 'J', 'A', 'Y', 'B'],
      ['A', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ALBERT');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally going up but backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'L', 'I', 'N', 'O', 'A', 'L', 'D'],
      ['Y', 'F', 'Z', 'F', 'L', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'B', 'H', 'V', 'R', 'G'],
      ['W', 'H', 'E', 'S', 'R', 'E', 'R', 'L'],
      ['B', 'R', 'N', 'H', 'J', 'T', 'Y', 'B'],
      ['T', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ALBERT');

    assert.isTrue(result);
  });

  it("should return false if the word array is empty", function() {
    const result = wordSearch([], 'BOB');

    assert.isFalse(result);
  });
});
