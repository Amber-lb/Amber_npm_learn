const _ = require('lodash')

module.exports = function (arr) {
    const newArr = _.cloneDeep(arr)
    console.log(newArr == arr)
    return newArr
}