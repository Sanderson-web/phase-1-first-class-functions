function receivesAFunction(callback) {
    callback ("")
}

const returnsANamedFunction = function() {
    return returnsANamedFunction
}

const returnsAnAnonymousFunction = function() {
    return (function () {});
}