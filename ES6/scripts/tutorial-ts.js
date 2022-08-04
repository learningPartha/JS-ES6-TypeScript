"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
fetch('https://www.google.com')
    .then(function (response) { console.log(response.status); })
    .catch(function (reason) { console.log('ERROR', reason); })
    .finally(function () { console.log('END'); });
//# sourceMappingURL=tutorial-ts.js.map