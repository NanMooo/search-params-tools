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
export var getSearchParams = function (searchParamsString) {
    var currentParams = new URLSearchParams(searchParamsString);
    var paramsObject = {};
    currentParams.forEach(function (value, key) {
        paramsObject[key] = value;
    });
    return paramsObject;
};
