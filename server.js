const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor listo en http://localhost:${port}`));
module.exports = app;
