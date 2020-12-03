var unirest = require("unirest");
const express = require("express");
const app = express();

//analysis endpoint

app.get("/get-analysis/:reg", (req, res) => {
  const region = req.params.reg;
  // console.log(region);

  var req = unirest(
    "GET",
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis"
  );

  req.query({
    symbol: "AMRN",
    region: region,
  });

  req.headers({
    "x-rapidapi-key": "1976693688msh9d1793224edb8fbp1a743djsna65a4d40acab",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    useQueryString: true,
  });

  req.end(function (response) {
    if (res.error) throw new Error(res.error);

    res.send(response.body);
  });
});

//news endpoint

app.get("/get-news/:reg", (req, res) => {
  const region = req.params.reg;

  var unirest = require("unirest");

  var req = unirest(
    "GET",
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details"
  );

  req.query({
    uuid: "9803606d-a324-3864-83a8-2bd621e6ccbd",
    region: region,
  });

  req.headers({
    "x-rapidapi-key": "1976693688msh9d1793224edb8fbp1a743djsna65a4d40acab",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    useQueryString: true,
  });

  req.end(function (response) {
    if (res.error) throw new Error(res.error);

    res.send(response.body);
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
