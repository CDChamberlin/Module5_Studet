const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
