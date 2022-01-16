import { Category } from "../model/Category";


interface ICategoryRepositoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({name, description}: ICategoryRepositoryDTO): void;
    list(): Category[];
    findByName(name: string): Category;
}

export { ICategoriesRepository, ICategoryRepositoryDTO}