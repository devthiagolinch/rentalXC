import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";


class ListCategoriesController {
    constructor( private listCategoriesUseCase: ListCategoriesUseCase) {};

    handle( request: Request, response: Response) {
        const allCategories = this.listCategoriesUseCase.execute();
        return response.status(201).json(allCategories);
    }
}

export { ListCategoriesController }