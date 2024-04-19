/**
 * Converts pixels to rems (Root ems) based on the default font size of 16 pixels.
 * @param {number} number - The number of pixels to be converted to rems.
 * @returns {string} A string representing the converted value in rems, appended with 'rem'.
 */

const pxToRem = (number) => {
  return `${number / 16}rem`;
};

export default pxToRem;
