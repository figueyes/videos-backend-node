const express = require('express');

const { moviesMock } = require('../utils/mocks/movies');

const moviesApi = (app) => {
    const router = express.Router();
    app.use("/api/movies", router);

    /**
     * HTTP METHOD GET: Todas las películas
     */
    router.get("/", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200)
            .json({
                data: movies,
                message: 'movies listed'
            });
        } catch(err){
            console.log(err);
        }
    });

    /**
     * HTTP METHOD GET: Id de película
     */
    router.get("/:movieId", async (req, res, next) => {
        try {
            const movie = await Promise.resolve(moviesMock[0]);
            res.status(200)
            .json({
                data: movie,
                message: 'movie retrieved'
            });
        } catch(err){
            console.log(err);
        }
    });

    /**
     * HTTP POST: Crear una película
     */
    router.post("/", async (req, res, next) => {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201)
            .json({
                data: createdMovieId,
                message: 'movie created'
            });
        } catch(err){
            console.log(err);
        }
    });

    /**
     * HTTP PUT : Actualizando pelicula
     */
    router.put("/:movieId", async (req, res, next) => {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200)
            .json({
                data: updatedMovieId,
                message: 'movie updated'
            });
        } catch(err){
            console.log(err);
        }
    });

    /**
     * HTTP DELETE : Actualizando pelicula
     */
    router.put("/:movieId", async (req, res, next) => {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200)
            .json({
                data: deletedMovieId,
                message: 'movie deleted'
            });
        } catch(err){
            console.log(err);
        }
    });
}

module.exports = moviesApi;