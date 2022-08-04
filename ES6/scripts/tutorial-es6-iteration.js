var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b, e_3, _c;
//iterate map
var myMap = new Map([
    ["fname", "Chandler"],
    ["lname", "Bing"]
]);
try {
    for (var _d = __values(myMap.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var _f = __read(_e.value, 2), key_1 = _f[0], value = _f[1];
        console.log("".concat(key_1, " -> ").concat(value));
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    for (var _g = __values(myMap.keys()), _h = _g.next(); !_h.done; _h = _g.next()) {
        var key_2 = _h.value;
        console.log(key_2);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
    }
    finally { if (e_2) throw e_2.error; }
}
try {
    for (var _j = __values(myMap.values()), _k = _j.next(); !_k.done; _k = _j.next()) {
        var value = _k.value;
        console.log(value);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
    }
    finally { if (e_3) throw e_3.error; }
}
//forEach iteration
function arrayFunction(element, index, array) {
    console.log("arr[" + index + "] = " + element);
}
;
var numberArr = [2, 4, 6, 8];
numberArr.forEach(arrayFunction); // pass function which will process on each element of array
function mapFunction(value, key, callingMap) {
    console.log(key + " " + value);
    console.log(myMap === callingMap);
}
myMap.forEach(mapFunction);
var mySet = new Set([1, 2, 3]);
function setFunction(value, key, callingSet) {
    console.log(key + " " + value);
    console.log(mySet === callingSet);
}
mySet.forEach(setFunction);
//# sourceMappingURL=tutorial-es6-iteration.js.map