const express = require("express");
const router = express.Router();
const { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require("../controllers/moviecontroller");
const { protect, adminOnly } = require("../middlewares/auth");

router.get("/",          getMovies);
router.get("/:id",       getMovieById);
router.post("/",         protect, adminOnly, createMovie);
router.put("/:id",       protect, adminOnly, updateMovie);
router.delete("/:id",    protect, adminOnly, deleteMovie);

module.exports = router;