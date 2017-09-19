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
