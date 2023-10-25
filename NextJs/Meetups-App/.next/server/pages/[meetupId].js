(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 3780:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(3780);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js



function MeetupDetail(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js





function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.meetupData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                image: props.meetupData.image,
                title: props.meetupData.title,
                address: props.meetupData.address,
                description: props.meetupData.description
            })
        ]
    });
}
async function getStaticPaths() {
    //connect to the db
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://fatmasliti:AZLgG0d4L197VdFf@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    //fetch data
    const meetups = await meetupCollection.find({}, {
        _id: 1
    }).toArray(); //all the docs but with only the ID
    client.close();
    //used in dynamic pages containing the getStaticProps function to tell NextJs for which dynamic values this page should pre-generated
    return {
        //all the dynamic segment values (all the meetup IDs (meetup is called a segment)) for which this page should be re-generated
        fallback: false,
        //fallback pre-generates only the pages with m1 and m2 IDs (the most popular pages in the site for e.g)
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    //params is an obj where the identifier (meeetupId) will be the property and the values will be the actual values encoded in the url
    // console.log(meetupId); //not shown in the console of the browser because thes code inside getStaticProps runs during build time
    //connect to the db
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://fatmasliti:AZLgG0d4L197VdFf@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    //fetch data for a single meetup
    const selectMeetup = await meetupsCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    }); //filter by id
    client.close();
    return {
        props: {
            // meetupData: selectMeetup,//but as we need to convert the id =>
            meetupData: {
                id: selectMeetup._id.toString(),
                title: selectMeetup.title,
                address: selectMeetup.address,
                image: selectMeetup.image,
                description: selectMeetup.description
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8721));
module.exports = __webpack_exports__;

})();