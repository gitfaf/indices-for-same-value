/** function getAllIndices
 *
 * @param {*} forValue
 * @param {Array} inArray Array of values we are interested in.
 * @returns {Array} Returns an array of all the indices that have given value
 *
 * @example
 *
 * getAllIndices(10, [10, 2, 3, 4, 5, 6, 7, 10, 10 ,10])
 * returns ["0", "7", "8", "9"]
 */
function getAllIndices(forValue, inArray) {
    var indices = []
    for (let index of Object.keys(inArray)) {
        if (inArray[index] === forValue) {
            indices.push(index)
        }
    }
    return indices
}

module.exports = {
    getAllIndices
}
