const getAllIndices = require('../index').getAllIndices

describe('get all indices for value in array', () => {
    it('gets all indices for unique-valued array', () => {
        const value = 2
        const array = [1, 2, 2, 2, 1, 2, 3, 4, 4, 3, 2, 1]
        const actual = getAllIndices(value, array)
        const expected = [1, 2, 3, 5, 10].map(i => String(i))
        expect(actual.length).toBe(expected.length)
        for(let i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i])
        }
    })
})
