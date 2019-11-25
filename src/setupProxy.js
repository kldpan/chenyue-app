const proxy = require("http-proxy-middleware");
var Mock = require("mockjs");

module.exports = function(app) {
  app.get("/test", (req, res) => {
    var data = Mock.mock({
      "list|1-10": [
        {
          "id|+1": 1
        }
      ]
    });
    res.json(data);
  });


  app.use(
    proxy("/apis", {
      target: "https://cnodejs.org",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": ""
      }
    })
  );
};
