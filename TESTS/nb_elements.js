var calcul = function (str) {
    var a = str.filter((e)=> e.length>50).length;
    return a
};

module.exports = {calcul};
