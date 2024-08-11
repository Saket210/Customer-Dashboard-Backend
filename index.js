const express = require("express");
const routes = require("./routes/index");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const cors = require("cors");
app.use(cors({}));

app.use(express.json());

app.get('/', (_, res) => {
    res.send({ success: 'OK' });
});

app.use("/api", routes)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on the port ${port}...`);
})