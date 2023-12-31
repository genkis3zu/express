var express = require("express");
var router = express.Router();

const request = require("request");

router.get("/", async (req, res) => {
  request(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const data = body;
        // resjson(data);
        res.render("qrcode", { title: "QR Code Express!" });
        console.log(body);
        const qrImageUrl = data[0].url;
        console.log(qrImageUrl);
      }
    }
  );
});

module.exports = router;
