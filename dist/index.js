export var addSearchParams = function (searchParamsString, params) {
    var currentParams = new URLSearchParams(searchParamsString);
    Object.keys(params).map(function (key) { return currentParams.append(key, params[key]); });
    return currentParams.toString();
};
export var delSearchParams = function (searchParamsString, keys) {
    var currentParams = new URLSearchParams(searchParamsString);
    keys.map(function (key) { return currentParams["delete"](key); });
    return currentParams.toString();
};
export var getSearchParams = function (searchParamsString, key) {
    var currentParams = new URLSearchParams(searchParamsString);
    if (key) {
        return currentParams.get(key);
    }
    else {
        var paramsObject_1 = {};
        currentParams.forEach(function (value, key) {
            paramsObject_1[key] = value;
        });
        return paramsObject_1;
    }
};
