import { Request, Response } from 'express';
import { ImportCategoriesUseCase } from './importCategoryUseCase';



class ImportCategoriesController {
    constructor(private importCategoryUseCase: ImportCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const {file} = request;

        this.importCategoryUseCase.execute(file)

        return response.send()
    }
}

export { ImportCategoriesController }