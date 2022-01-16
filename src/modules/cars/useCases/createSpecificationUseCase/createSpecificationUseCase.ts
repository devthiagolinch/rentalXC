import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


class CreateSpecificationUseCase {
    constructor( private specificationRepository: ISpecificationsRepository) {}

    execute({name, description}) {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error("Specification already exists");
        };

        this.specificationRepository.create({name, description})
    }
}

export { CreateSpecificationUseCase }