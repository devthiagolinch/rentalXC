import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecificationUseCase";
import { listCategoriesController } from "../modules/cars/useCases/listCategoriesUseCase";

const specificationsRoutes = Router();

// POST
specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response)
})

// GET
specificationsRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

export { specificationsRoutes }