"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js
//API routes will only run on the server
 // this obj allows us to connect
// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
    //req obj: contains data about the incoming request
    //res obj: needed for sending back a response
    if (req.method === "POST") {
        const data = req.body;
        // const { title, image, address, description } = data;
        // const client = await MongoClient.connect('mongodb+srv://fatmasliti:900eTa1yTp6fc7DY@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority');
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://fatmasliti:AZLgG0d4L197VdFf@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        // a single meetup would be a single document
        // const result = await meetupCollection.insertOne({ title, image, address, description });
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5940));
module.exports = __webpack_exports__;

})();