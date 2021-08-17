/**
 * Finds continues numbers in array
 * @param {Array.<Number>} nums_array array of positive sorted integers 
 * @returns {string} string with continues numbers are specified with symbol '-' if they exist,
 * otherwise - just a numbers itself separted by comma 
 */
async function findContinuesNumbers(nums_array) {
  let response = [];
  for (let index = 0; index < nums_array.length; index ++) {
    const num = nums_array[index];
    if (index === 0) {
      response.push([num, num]);
      continue;
    }
    const last_element = response[response.length - 1];
    if (last_element[1] + 1 === num) {
      last_element[1] = num;
      continue;
    }
    else {
      response.push([num, num]);
    }
  }
  response = response.map(element => {
    if (element[0] === element[1]) {
      return element[0];
    }
    if (element[1] - element[0] <= 1) {
      return element.join(',');
    }
    return element.join('-');
  })
  return response.join(',');
};

module.exports = findContinuesNumbers;