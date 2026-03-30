const express = require("express");
const router = express.Router();
const { getMyWatchlist, addToWatchlist, updateWatchlistEntry, removeFromWatchlist } = require("../controllers/watchlistcontroller");
const { protect } = require("../middlewares/auth");

router.get("/",       protect, getMyWatchlist);
router.post("/",      protect, addToWatchlist);
router.put("/:id",    protect, updateWatchlistEntry);
router.delete("/:id", protect, removeFromWatchlist);

module.exports = router;