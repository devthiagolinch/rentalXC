import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


class ListSpecificationsUseCase {
    constructor( private specificationRepository: ISpecificationsRepository) {}

    execute(){
        const specifications = this.specificationRepository.list();
        return specifications;
    }
}

export { ListSpecificationsUseCase }