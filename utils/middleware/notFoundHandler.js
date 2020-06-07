const boom = require('@hapi/boom');

const notFoundHanlder = (req, res) => {
    const {
        output: { statusCode, payload }
    } = boom.notFound();
    res.status(statusCode).json(payload);
}
module.exports = notFoundHanlder;