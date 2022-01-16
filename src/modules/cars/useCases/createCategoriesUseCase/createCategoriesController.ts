import { Request, Response } from "express";
import { CreateCategoriesUseCase } from "./createCategoriesUseCase";


class CreateCategoriesController {
    constructor( private createCategoriesUseCase: CreateCategoriesUseCase) {};

    handle(request: Request, response: Response) {
        const {name, description} = request.body;

        this.createCategoriesUseCase.execute(name, description);

        return response.status(201).send();
    }
}

export { CreateCategoriesController }