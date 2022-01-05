import { response } from "express";
import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[]

    constructor(){
        this.categories = []
    };

    create({name, description}: ICreateCategoryDTO) {

        const category = new Category();
    
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
    
        this.categories.push(category)
    };

    edit(id: string,{name, description}: ICreateCategoryDTO) {
        const category = this.categories.find((category) => category.id === id)

        if(!category) {
            return response.status(404).json({error: "Not found!"})
        }

        category.name = name;
        category.description =  description;
    };

    list(): Category[] {
        return this.categories
    }

    findByName(name: string){
        const category = this.categories.find(category => category.name === name);
        return category;
    }

    findById(id: string) {
        const category = this.categories.find(category => category.id === id);
        return category;
    };
}

export {CategoriesRepository}