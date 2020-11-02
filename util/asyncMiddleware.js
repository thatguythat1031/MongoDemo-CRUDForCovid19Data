
/**
 * middleware to keep from having silent async/await
 * failures with express. Takes express route handler and
 * wraps it as a promise. Catches all promise rejections.
 */
const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncMiddleware;