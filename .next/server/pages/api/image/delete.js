"use strict";
(() => {
var exports = {};
exports.id = 287;
exports.ids = [287,748];
exports.modules = {

/***/ 166:
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ 67096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 38013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 73227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 47449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 47459:
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ 46424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72452);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14270);




async function handler(request, response) {
    if (request.method == "POST") {
        // let session = await getServerSession(request, response, authOptions);
        // console.log(session, "세션");
        /// auth 부분
        ////////////////////////////////
        /// db 부분
        const db = (await _util_database__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u).db("subi");
        // let preResult = await db
        //   .collection("post")
        //   .findOne({ _id: new ObjectId(request.body) });
        // console.log(preResult.author);
        try {
            let result = await db.collection("post").updateOne({
                _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(request.body)
            }, {
                $set: {
                    url: null,
                    imageRef: null
                }
            });
            // .deleteOne({ _id: new ObjectId(request.body) })
            return response.status(200).json("삭제 완료");
        } catch (error) {
            return response.status(400).json("삭제 안됨");
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270], () => (__webpack_exec__(46424)));
module.exports = __webpack_exports__;

})();