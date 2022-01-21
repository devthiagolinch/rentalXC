import { CategoriesRepository } from "../../repositories/implements/CategoriesRepository";
import { ImportCategoriesController } from "./importCategoryController";
import { ImportCategoriesUseCase } from "./importCategoryUseCase";


const categoriesRepository = CategoriesRepository.getInstace();
const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)

export { importCategoriesController, importCategoriesUseCase }