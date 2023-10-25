exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 2631:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Layout_main__NgJgX"
};


/***/ }),

/***/ 5314:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "MainNavigation_header__WuiTa",
	"logo": "MainNavigation_logo__oTonQ",
	"active": "MainNavigation_active__eKPZi"
};


/***/ }),

/***/ 3843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/MainNavigation.module.css
var MainNavigation_module = __webpack_require__(5314);
var MainNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MainNavigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/MainNavigation.js



function MainNavigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (MainNavigation_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MainNavigation_module_default()).logo,
                children: "React Meetups"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "All Meetups"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/new-meetup",
                                children: "Add New Meetup"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const layout_MainNavigation = (MainNavigation);

// EXTERNAL MODULE: ./components/layout/Layout.module.css
var Layout_module = __webpack_require__(2631);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/layout/Layout.js



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MainNavigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Layout_module_default()).main,
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;