"use strict";
(() => {
var exports = {};
exports.id = 956;
exports.ids = [956];
exports.modules = {

/***/ 38013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 67777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72452);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);


async function handler(request, response) {
    console.log(request.body, "요청 바디");
    try {
        const client = await _util_database__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u;
        const db = client.db("subi");
        let result = await db.collection("post").findOne({
            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(request.body)
        });
        result._id = result._id.toString();
        console.log(result, "리절트");
        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json("업로드 실패");
    }
}


/***/ }),

/***/ 72452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ connectDB)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const url = "mongodb+srv://azkjhg:rlqja364@cluster0.sevivvw.mongodb.net/?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true
};
let connectDB;
if (false) {} else {
    connectDB = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(url, options).connect();
}



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(67777));
module.exports = __webpack_exports__;

})();