import { SpecificationRepository } from "../../repositories/implements/SpecificationsRepository";
import { ImportSpecificationController } from "./importSpecificationController";
import { ImportSpecificationUseCase } from "./importSpecificationUseCase";


const specificationRepository = SpecificationRepository.getInstance();
const importSpecificationUseCase = new ImportSpecificationUseCase(specificationRepository);
const importSpecificationController = new ImportSpecificationController(importSpecificationUseCase);

export { importSpecificationController, importSpecificationUseCase}