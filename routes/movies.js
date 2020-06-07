const express = require('express');
const MoviesService = require('../services/movies');
const { moviesMock } = require('../utils/mocks/movies');
const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');

const moviesApi = (app) => {
    const router = express.Router();
    app.use("/api/movies", router);
    const moviesService = new MoviesService();

    /**
     * HTTP METHOD GET: Todas las películas
     */
    router.get("/", async (req, res, next) => {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200)
            .json({
                data: movies,
                message: 'movies listed'
            });
        } catch(err){
            console.log(err);
            next(err);
        }
    });

    /**
     * HTTP METHOD GET: Id de película
     */
    router.get("/:movieId", validationHandler({ movieId: movieIdSchema }, 'params'), async (req, res, next) => {
        const { movieId } = req.params;
        try {
            const movie = await moviesService.getMovie({ movieId });
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
    router.post("/", validationHandler({ createMovieSchema }), async (req, res, next) => {
        const { body: movie } = req; 
        try {
            const createdMovieId = await moviesService.createMovie({ movie })
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
    router.put("/:movieId", validationHandler({ movieId: movieIdSchema }, 'params'), validationHandler({ updateMovieSchema }), async (req, res, next) => {
        const { movieId } = req.params;
        const { body: movie } = req; 
        try {
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
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
    router.delete("/:movieId", validationHandler({ movieId: movieIdSchema }, 'params'), async (req, res, next) => {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });
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