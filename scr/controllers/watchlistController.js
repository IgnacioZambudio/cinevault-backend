const Watchlist = require("../models/Watchlist");
const Movie = require("../models/Movie");

const getMyWatchlist = async (req, res) => {
  try {
    const list = await Watchlist.find({ user: req.user._id }).populate("movie");
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToWatchlist = async (req, res) => {
  try {
    const { movieId, status } = req.body;
    const movie = await Movie.findById(movieId);
    if (!movie) return res.status(404).json({ message: "Película no encontrada" });

    const entry = await Watchlist.create({ user: req.user._id, movie: movieId, status });
    res.status(201).json(entry);
  } catch (error) {
    if (error.code === 11000) return res.status(400).json({ message: "Ya tienes esta película en tu lista" });
    res.status(500).json({ message: error.message });
  }
};

const updateWatchlistEntry = async (req, res) => {
  try {
    const entry = await Watchlist.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!entry) return res.status(404).json({ message: "Entrada no encontrada" });

    // Recalcular avgRating de la película si cambia el userRating
    if (req.body.userRating) {
      const ratings = await Watchlist.find({ movie: entry.movie, userRating: { $ne: null } });
      const avg = ratings.reduce((sum, r) => sum + r.userRating, 0) / ratings.length;
      await Movie.findByIdAndUpdate(entry.movie, { avgRating: Math.round(avg * 10) / 10 });
    }

    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromWatchlist = async (req, res) => {
  try {
    const entry = await Watchlist.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!entry) return res.status(404).json({ message: "Entrada no encontrada" });
    res.json({ message: "Eliminado de tu watchlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMyWatchlist, addToWatchlist, updateWatchlistEntry, removeFromWatchlist };