import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();


// POST ROUTE
categoriesRoutes.post("/", (request, response) => {
    const {name, description } = request.body;

    categoriesRepository.create({name, description})

    return response.status(201).send();
})

// PUT ROUTE
categoriesRoutes.put("/:id", (request, response) => {
    const {name, description} = request.body;
    const {id} = request.params;

    const categoryExists = categoriesRepository.findById(id)

    if(!categoryExists) {
        return response.status(404).json({error: "Category not Exists"})
    }

    categoriesRepository.edit(id,{name, description})

    return response.status(201).send()
})

// GET ALL CATEGORIES ROUTE
categoriesRoutes.get("/", (req, res) => {
    const categories = categoriesRepository.list();

    return res.json(categories)
})

export {categoriesRoutes}