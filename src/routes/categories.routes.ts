import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = []

// POST ROUTE
categoriesRoutes.post("/", (request, response) => {
    const {name, description } = request.body;

    const category = new Category();

    Object.assign(category, {
        name,
        description,
        created_at: new Date(),
    });

    categories.push(category)

    return response.status(201).json({category})
})

// GET ALL CATEGORIES ROUTE
categoriesRoutes.get("/", (req, res) => {
    return res.json({categories})
})

export {categoriesRoutes}