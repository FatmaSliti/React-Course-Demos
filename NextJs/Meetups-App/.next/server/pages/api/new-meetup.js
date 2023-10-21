"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//API routes will only run on the server\n // this obj allows us to connect\n// /api/new-meetup\n// POST /api/new-meetup\nasync function handler(req, res) {\n    //req obj: contains data about the incoming request\n    //res obj: needed for sending back a response\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // const { title, image, address, description } = data;\n        // const client = await MongoClient.connect('mongodb+srv://fatmasliti:900eTa1yTp6fc7DY@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority');\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://fatmasliti:AZLgG0d4L197VdFf@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupCollection = db.collection(\"meetups\");\n        // asingle meetup would be a single document\n        // const result = await meetupCollection.insertOne({ title, image, address, description });\n        const result = await meetupCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3Q0FBd0M7QUFDRixDQUFDLGdDQUFnQztBQUV2RSxrQkFBa0I7QUFDbEIsdUJBQXVCO0FBRXZCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0IsbURBQW1EO0lBQ25ELDZDQUE2QztJQUM3QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdkIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsdURBQXVEO1FBRXZELDBKQUEwSjtRQUMxSixNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQUMsNEdBQTRHLENBQUM7UUFDdEosTUFBTVMsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUV0QixNQUFNQyxnQkFBZ0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2pELDRDQUE0QztRQUU1QywyRkFBMkY7UUFDM0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGdCQUFnQixDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztRQUVyRFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDO1FBRWZiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGtCQUFrQjtTQUFFLENBQUM7SUFDekQsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWxCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0FQSSByb3V0ZXMgd2lsbCBvbmx5IHJ1biBvbiB0aGUgc2VydmVyXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7IC8vIHRoaXMgb2JqIGFsbG93cyB1cyB0byBjb25uZWN0XHJcblxyXG4vLyAvYXBpL25ldy1tZWV0dXBcclxuLy8gUE9TVCAvYXBpL25ldy1tZWV0dXBcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIC8vcmVxIG9iajogY29udGFpbnMgZGF0YSBhYm91dCB0aGUgaW5jb21pbmcgcmVxdWVzdFxyXG4gICAgLy9yZXMgb2JqOiBuZWVkZWQgZm9yIHNlbmRpbmcgYmFjayBhIHJlc3BvbnNlXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgICAvLyBjb25zdCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IGRhdGE7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vZmF0bWFzbGl0aTo5MDBlVGExeVRwNmZjN0RZQGNsdXN0ZXIwLndpb2Y1MXUubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2ZhdG1hc2xpdGk6QVpMZ0cwZDRMMTk3VmRGZkBjbHVzdGVyMC53aW9mNTF1Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgICAgICAvLyBhc2luZ2xlIG1lZXR1cCB3b3VsZCBiZSBhIHNpbmdsZSBkb2N1bWVudFxyXG5cclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmluc2VydE9uZSh7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJyB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcblxyXG4vL3RoZSBjb2RlIGRlZmluZWQgaW4gaGVyZSAoYXBpKSB3aWxsIG5ldmVyIGVuZCB1cCBvbiB0aGUgY2xpZW50IHNpZGVcclxuLy9zbyB0aGlzIGlzIGEgc2VjdXJlIHBsYWNlIHRvIHN0b3JlIGNyZWRlbnRpYWxzXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();