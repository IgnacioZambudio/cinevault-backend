require("dotenv").config();
const express = require("express");
const cors    = require("cors");
const connectDB = require('./scr/config/db');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",      require("./scr/routes/authroutes"));
app.use("/api/movies",    require("./scr/routes/movieRoutes"));
app.use("/api/watchlist", require("./scr/routes/watchlistRoutes"));

app.get("/", (req, res) => res.json({ message: "CineVault API funcionando" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));