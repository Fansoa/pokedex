/**
 * Generates a random integer between 0 (inclusive) and the specified maximum value (exclusive).
 * @param {number} max - The upper bound (exclusive) of the random integer to be generated.
 * @returns {number} A random integer between 0 (inclusive) and max (exclusive).
 */

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export default getRandomInt;
