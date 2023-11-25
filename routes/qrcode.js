var express = require("express");
var router = express.Router();

const request = require("request");

router.get("/", async (req, res) => {
  request(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.json(data);
        console.log(body);
        const catImageUrl = data[0].url;
        console.log(catImageUrl);
      }
    }
  );
});

module.exports = router;
