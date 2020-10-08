const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();

  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);

      res.status(200).json({
        data: movies,
        message: 'Movies has been listed'
      });

    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async (req, res, next) => {
    try {
      const movie = await Promise.resolve(moviesMock[0]);

      res.status(200).json({
        data: movie,
        message: 'The movie has been listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(201).json({
        data: createdMovieId,
        message: 'The movie has been created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async (req, res, next) => {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: updatedMovieId,
        message: 'The movie has been updated'
      });

    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async (req, res, next) => {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: deletedMovieId,
        message: 'The movie has been deleted'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;