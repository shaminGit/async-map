

const getMapData = (list, mapper) => Promise.resolve(list.map(mapper))
const getFilterData = (list, filter) => Promise.resolve(list.filter(filter))
const getReducedData = (list, reducer) => Promise.resolve(list.reduce(reducer))


const asyncMap = (list, mapper, cb) => {
    getMapData(list, mapper).then(data => {
        cb(data)
    }, er => console.log(er))
}

const asyncFilter = (list, filter, cb) => {
    getFilterData(list, filter).then(data => {
        cb(data)
    }, er => console.log(er))
}

const asyncReduce = (list, reducer, cb) => {
    getReducedData(list, reducer).then(data => {
        cb(data)
    }, er => console.log(er))
}

module.exports = {
    asyncMap,
    asyncFilter,
    asyncReduce
}
