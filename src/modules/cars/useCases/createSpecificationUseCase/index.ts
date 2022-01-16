import { SpecificationRepository } from "../../repositories/implements/SpecificationsRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";


const specificationRepository = SpecificationRepository.getInstance();
const specificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(specificationUseCase)

export { createSpecificationController, specificationUseCase }