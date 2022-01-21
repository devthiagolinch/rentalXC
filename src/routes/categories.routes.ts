import { Router } from 'express';
import multer from 'multer';

import { createCategoriesController } from '../modules/cars/useCases/createCategoriesUseCase';
import { importCategoriesController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategoriesUseCase';

const categoriesRoutes = Router();

const upload = multer({ dest: './tmp'})


// POST ROUTE
categoriesRoutes.post("/", (request, response) => {
    return createCategoriesController.handle(request, response)
})

// GET ALL CATEGORIES ROUTE
categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

// IMPORT CATEGORIES ROUTE
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoriesController.handle(request, response)
})


// PUT ROUTE
categoriesRoutes.put("/:id", (request, response) => {
/*     const {name, description} = request.body;
    const {id} = request.params;

    const categoryExists = categoriesRepository.findById(id)

    if(!categoryExists) {
        return response.status(404).json({error: "Category not Exists"})
    }

    categoriesRepository.edit(id,{name, description})

    return response.status(201).send() */
})

export {categoriesRoutes}