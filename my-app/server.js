const express = require("express");
//require('dotenv').cofig()
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

require("./functions/database");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", require("./routes/routerCities"));
app.use("/api", require("./routes/routerActivities"));
app.use("/api", require("./routes/routerItinerarys"));
app.use("/api", require("./routes/routerUser"));
app.get("/test", (req, res) => {
  res.send({ express: "Hello " });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
