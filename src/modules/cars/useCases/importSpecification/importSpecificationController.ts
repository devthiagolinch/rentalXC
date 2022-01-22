import { Request, Response } from "express";
import { ImportSpecificationUseCase } from "./importSpecificationUseCase";



class ImportSpecificationController {
    constructor(private importSpecificationUseCase: ImportSpecificationUseCase) {};

    handle(request: Request, response: Response): Response {
        const {file} = request;

        this.importSpecificationUseCase.execute(file)

        return response.status(201).send();
    }
}

export { ImportSpecificationController }