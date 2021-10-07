const getObjectProperty = (object, path, defaultValue) => {
    const pathAsArray = path.split(".")
    let result = object
    for (let p of pathAsArray) {
        if (result[p]) {
            result = result[p]
        }
        else {
            return defaultValue
        }
    }
    return result
}

module.exports = getObjectProperty