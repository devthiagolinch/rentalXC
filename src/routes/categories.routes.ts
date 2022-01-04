import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();


// POST ROUTE
categoriesRoutes.post("/", (request, response) => {
    const {name, description } = request.body;

    categoriesRepository.create({name, description})

    return response.status(201).send();
})

// GET ALL CATEGORIES ROUTE
categoriesRoutes.get("/", (req, res) => {
    const categories = categoriesRepository.list();

    return res.json(categories)
})

export {categoriesRoutes}