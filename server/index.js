const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const { getFortune } = require('./controller');
const { getColor } = require('./controller');
const { getPicture } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/color", getColor);
app.get("/api/picture", getPicture);

app.listen(4000, () => console.log("Server running on 4000"));
