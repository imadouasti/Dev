var c = 0;

var calcul = function (str) {
    str.map(function (v) {
        if (v.length > 50)
            c++
    }, str);
    return c
};

module.exports = {calcul};
