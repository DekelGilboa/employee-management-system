class NotFoundError extends Error {
  constructor(id = "unknown") {
    super(`Employee with ID ${id} not found`);
    this.name = "NotFoundError";
    this.status = 404;
  }
}
module.exports = NotFoundError;
