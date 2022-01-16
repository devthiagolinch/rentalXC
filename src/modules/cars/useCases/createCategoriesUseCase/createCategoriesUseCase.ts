import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class CreateCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {};

    execute(name, description){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if(categoryAlreadyExists) {
            throw new Error("Category already exists!");
        };

        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoriesUseCase }