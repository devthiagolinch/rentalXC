import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase {
    constructor( private categoriesRepository: ICategoriesRepository){};

    execute(){
        const all = this.categoriesRepository.list();
        return all
    }
}

export { ListCategoriesUseCase }