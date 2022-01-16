import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";



class ListSpecificationsController {
    constructor (private listSpecificationsUseCase: ListSpecificationsUseCase) {};

    handle(request: Request, response: Response): Response {
        const specifications = this.listSpecificationsUseCase.execute();
        return response.status(201).json(specifications)
    }
}

export { ListSpecificationsController }