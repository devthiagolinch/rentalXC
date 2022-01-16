import { Request, Response } from "express";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";


class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {};

    handle(request: Request, response: Response){
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({name, description});

        return response.status(201).send();
    }
}

export { CreateSpecificationController }