import libraryError from "../utils/libraryError";

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    if (error.name === "CastError") {
        const message = `Invalid ${err.path}: ${err.value}. This resource doesn't exist.`;
    }
};