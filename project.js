const settings = require("./config.json");
const models = require("./models");
const platform = require("nuc-platform-express");

const app = platform.init({ settings, models });

app.use("/api/colleagues", require("./routes/colleagues"));

app.listen(3000);
