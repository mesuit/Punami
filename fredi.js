const express = require("express");
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 0x1f40;
let server = require("./frediqr");
let code = require("./pair");
require('events').EventEmitter.defaultMaxListeners = 0x1f4;
app.use("/frediqr", server);
app.use("/code", code);
app.use("/pair", async (_0x150aee, _0x379687, _0x116ce2) => {
  _0x379687.sendFile(__path + "/fredipair.html");
});
app.use('/', async (_0x3fbb60, _0x29821d, _0x5f55cf) => {
  _0x29821d.sendFile(__path + "/fredipage.html");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  'extended': true
}));
app.listen(PORT, () => {
  console.log("\n\nDon't Forget To Give Star\n\n Server running on http://localhost:" + PORT);
});
module.exports = app;
