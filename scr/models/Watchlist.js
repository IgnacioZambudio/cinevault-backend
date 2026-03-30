const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema(
  {
    user:       { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    movie:      { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
    status:     { type: String, enum: ["pending", "watched"], default: "pending" },
    userRating: { type: Number, min: 1, max: 10, default: null },
  },
  { timestamps: true }
);

// Un usuario solo puede tener una vez cada película en su lista
watchlistSchema.index({ user: 1, movie: 1 }, { unique: true });

module.exports = mongoose.model("Watchlist", watchlistSchema);