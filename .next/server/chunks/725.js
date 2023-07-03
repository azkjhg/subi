exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 20043:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 40408, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20053, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15396));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88311));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45900))

/***/ }),

/***/ 15396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__  auto */ 


const LoginBtn = ({ session  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: session ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: ()=>{
                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();
            },
            children: "로그아웃"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: ()=>{
                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();
            },
            children: "Copyright \xa9 2023 양수비공인중개사사무소"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginBtn);


/***/ }),

/***/ 88311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyContext": () => (/* binding */ MyContext),
/* harmony export */   "MyContextProvider": () => (/* binding */ MyContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ MyContext,MyContextProvider auto */ 

// 컨텍스트 생성
const MyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// 프로바이더 컴포넌트 생성
function MyContextProvider({ children  }) {
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        null,
        "전체"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyContext.Provider, {
        value: {
            value,
            setValue
        },
        children: children
    });
}



/***/ }),

/***/ 97731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(35985);
module.exports = createProxy("C:\\Users\\azkjh\\OneDrive\\바탕 화면\\project\\yangsubi\\app\\LoginBtn.js");


/***/ }),

/***/ 62335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Open_Sans_arguments_subsets_latin_variableName_sans___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4222);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Open_Sans_arguments_subsets_latin_variableName_sans___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_js_import_Open_Sans_arguments_subsets_latin_variableName_sans___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoginBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97731);
/* harmony import */ var _LoginBtn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoginBtn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92817);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88354);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53567);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44716);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62208);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54732);











const metadata = {
    title: "제주도 부동산 - 양수비 공인중개사 사무소",
    description: "제주도의 부동산을 소개합니다.",
    icons: {
        icon: "/favicon.ico"
    }
};
async function RootLayout({ children  }) {
    let session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_4__/* .authOptions */ .L);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "ko",
        className: (next_font_google_target_css_path_app_layout_js_import_Open_Sans_arguments_subsets_latin_variableName_sans___WEBPACK_IMPORTED_MODULE_9___default().className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "naver-site-verification",
                        content: "726ef2a1e6f54d0a00ea8d92409ec4d999c70448"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "Q3Ix5DGAml7dPAsDwMfziyZyuOwpPq-lBV634LiWabI"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "flex flex-col w-full max-w-screen-2xl mx-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "flex justify-between items-center px-4 py-2 sticky top-0  z-[9999] bg-green-50",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: "/images/긴로고투명.png",
                                    width: 180,
                                    height: 32,
                                    alt: "logo"
                                })
                            }),
                            session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "flex gap-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/list",
                                        children: "List"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/write",
                                        children: "Write"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_LoginBtn__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        session: session
                                    })
                                ]
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Context__WEBPACK_IMPORTED_MODULE_6__/* .MyContextProvider */ .iG, {
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "bg-slate-900 text-white py-2 text-sm text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_LoginBtn__WEBPACK_IMPORTED_MODULE_1___default()), {
                            session: session,
                            children: "Copyright \xa9 2023 양수비공인중개사사무소"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_8__/* .Analytics */ .cp, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 44716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iG": () => (/* binding */ e1)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof, MyContext */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\azkjh\OneDrive\바탕 화면\project\yangsubi\components\Context.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);

const e0 = proxy["MyContext"];

const e1 = proxy["MyContextProvider"];


/***/ }),

/***/ 53567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93709);
/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87928);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88354);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22155);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19173);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);






const authOptions = {
    providers: [
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
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
    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__/* .MongoDBAdapter */ .dJ)(_util_database__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u)
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions));


/***/ }),

/***/ 93709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;