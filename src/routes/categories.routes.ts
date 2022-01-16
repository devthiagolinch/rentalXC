import { Router } from 'express';

import { createCategoriesController } from '../modules/cars/useCases/createCategoriesUseCase';
import { listCategoriesController } from '../modules/cars/useCases/listCategoriesUseCase';

const categoriesRoutes = Router();


// POST ROUTE
categoriesRoutes.post("/", (request, response) => {
    return createCategoriesController.handle(request, response)
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

// GET ALL CATEGORIES ROUTE
categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

export {categoriesRoutes}