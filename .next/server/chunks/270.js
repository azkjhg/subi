"use strict";
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 14270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authOptions": () => (/* binding */ authOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72452);
/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(166);
/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47459);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);






const authOptions = {
    providers: [
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({
            //1. 로그인페이지 폼 자동생성해주는 코드
            name: "credentials",
            credentials: {
                id: {
                    label: "id",
                    type: "text"
                },
                password: {
                    label: "password",
                    type: "password"
                }
            },
            //2. 로그인요청시 실행되는코드
            //직접 DB에서 아이디,비번 비교하고
            //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
            async authorize (credentials) {
                let db = (await _util_database__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u).db("subi");
                let user = await db.collection("user_cred").findOne({
                    id: credentials.id
                });
                if (!user) {
                    console.log("해당 이메일은 없음");
                    return null;
                }
                const pwcheck = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.password);
                if (!pwcheck) {
                    console.log("비번틀림");
                    return null;
                }
                return user;
            }
        })
    ],
    //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    callbacks: {
        //4. jwt 만들 때 실행되는 코드
        //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
        jwt: async ({ token , user  })=>{
            if (user) {
                token.user = {};
                token.user.name = user.name;
                token.user.id = user.id;
            }
            return token;
        },
        //5. 유저 세션이 조회될 때 마다 실행되는 코드
        session: async ({ session , token  })=>{
            session.user = token.user;
            return session;
        }
    },
    secret: "qkfjdnqkwlw@*471dkf!@#",
    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_util_database__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions));


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