const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title:     { type: String, required: true, trim: true },
    year:      { type: Number, required: true },
    genre:     { type: String, required: true },
    synopsis:  { type: String },
    poster:    { type: String },
    avgRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);