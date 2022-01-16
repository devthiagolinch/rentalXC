import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecificationUseCase";
import { listCategoriesController } from "../modules/cars/useCases/listCategoriesUseCase";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecificationsUseCase";

const specificationsRoutes = Router();

// POST
specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response)
})

// GET
specificationsRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response)
})

export { specificationsRoutes }