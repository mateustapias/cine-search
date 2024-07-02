import { Request, Response } from 'express';
import MoviesListService from '../services/MoviesListService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MoviesListController {
  constructor(
    private moviewsListService = new MoviesListService(),
  ) { }

  async getAllByUser(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.moviewsListService.getAllByUser(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
