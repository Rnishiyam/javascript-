var express = require("express");
var router = express.Router();
const request = require("request");

router.get("/", async (req, res) => {
  // dog.ceo APIを使って犬の画像を取得
  request(
    "https://dog.ceo/api/breeds/image/random",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body); // APIのレスポンスをパース
        res.json(data); // JSON形式でクライアントに送信
      } else {
        // エラーレスポンス
        res.status(500).json({
          success: false,
          message: "Error fetching dog image",
        });
      }
    }
  );
});

module.exports = router;
