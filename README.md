# Indices for same value

Get all the indices for a value in an array.

```bash

    npm i -S indices-for-same-value

```

```javascript

    const getAllIndices = require('indices-for-same-value').getAllIndices

    getAllIndices(10, [10, 2, 3, 4, 5, 6, 7, 10, 10 ,10])
    // returns
    // ["0", "7", "8", "9"]

```

## Testing

`jasmine`

## License

MIT &copy; Git Faf 2017
