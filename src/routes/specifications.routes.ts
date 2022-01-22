import { Router } from "express";
import multer from "multer";

import { createSpecificationController } from "../modules/cars/useCases/createSpecificationUseCase";
import { importSpecificationController } from "../modules/cars/useCases/importSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecificationsUseCase";

const specificationsRoutes = Router();

const upload = multer({ dest: './tmp'})

// POST
specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response)
})

// IMPORT SPECIFICATION
specificationsRoutes.post("/import", upload.single("file"),(request, response) => {
    return importSpecificationController.handle(request, response)
})

// GET
specificationsRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response)
})

export { specificationsRoutes }