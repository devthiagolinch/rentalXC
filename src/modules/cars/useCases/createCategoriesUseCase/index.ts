import { CategoriesRepository } from "../../repositories/implements/CategoriesRepository";
import { CreateCategoriesController } from "./createCategoriesController";
import { CreateCategoriesUseCase } from "./createCategoriesUseCase";



const categoriesRepository = CategoriesRepository.getInstace();
const createCategoriesUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoriesController = new CreateCategoriesController(createCategoriesUseCase);

export { createCategoriesController,  createCategoriesUseCase };