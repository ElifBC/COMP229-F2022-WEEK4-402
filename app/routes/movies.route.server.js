import { Router } from "express";

import { DisplayMovieList, DisplayMovieAddPage } from "../controllers/movies.controller.server.js";

const router = Router();

router.get('/list', DisplayMovieList);

router.get('/movie-add', DisplayMovieAddPage);

export default router;