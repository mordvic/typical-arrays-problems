exports.min = function min(array) {
    if (typeof array === 'undefined' || array.length === 0) {
        return 0
    }
    return array.reduce((init, current) => {
        return (init > current ? current : init)
    })
}

exports.max = function max(array) {
    if (typeof array === 'undefined' || array.length === 0) {
        return 0
    }
    return array.reduce((init, current) => {
        return (init < current ? current : init)
    })
}

exports.avg = function avg(array) {
    if (typeof array === 'undefined' || array.length === 0) {
        return 0
    }
    return array.reduce((init, current) => {
        return (init + current);
    }) / array.length;
}
