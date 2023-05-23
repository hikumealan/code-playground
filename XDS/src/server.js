const path = require("path");

const express = require("express");
const app = express();

const file = path.join(__dirname, `/.www/dist/index.html`);

app.all(`*`, (req, res) => {
  res.sendFile(file);
});
app.use(express.static(file));

const startup = () => {
  console.log(`Example app listening on port ${server.address().port}`);
  console.log("");
  console.log("");
  console.log("");
};

const server =
  (process.env.ENV_EXPRESS_PROTOCOL || "").toLowerCase() === "https"
    ? https
      .createServer(
        {
          key: fs.readFileSync(process.env.ENV_EXPRESS_KEY, "utf8"),
          cert: fs.readFileSync(process.env.ENV_EXPRESS_CERT, "utf8"),
          passphrase: process.env.ENV_EXPRESS_PASSPHRASE,
        },
        app
      )
      .listen(process.env.ENV_EXPRESS_PORT, startup)
    : http.createServer(app).listen(process.env.ENV_EXPRESS_PORT, startup);
