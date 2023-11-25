var express = require("express");
var router = express.Router();

const request = require("request");

router.get("/", async (req, res) => {
  request(
    "https://api.thecatapi.com/v1/images/search",
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
