const NotFoundError = require("../errors/NotFoundError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ msg: err.message });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ msg: "Invalid or missing ID" });
  }
  return res.status(500).json({
    msg: err.message ?? "Something went wrong, please try again later",
  });
};

module.exports = errorHandler;
