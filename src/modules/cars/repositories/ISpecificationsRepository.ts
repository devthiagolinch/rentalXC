import { Specification } from "../model/Specification";

interface ISpecificationsRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({name, description}: ISpecificationsRepositoryDTO): void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export {ISpecificationsRepository, ISpecificationsRepositoryDTO}