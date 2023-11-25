var express = require("express");
var router = express.Router();

const responseObjectDataAll = {
  textObject1: {
    id: 1,
    title: "note1 title",
    subtitle: "note1 subtitle",
    bodytext: "note1 body text",
  },
  textObject2: {
    id: 2,
    title: "note2 title",
    subtitle: "note2 subtitle",
    bodytext: "note2 body text",
  },
};

/* GET home page.
 * @returns {Object[]} data
 * @returns {number}
 * @returns {string}
 * @returns {string}
 */
router.get("/", function (req, res, next) {
  res.json(responseObjectDataAll);
});

module.exports = router;
