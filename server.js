const express = require("express");
const testRoutes = require("./routes/tesRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use("/tests", testRoutes);
app.use("/home", express.static("public"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
