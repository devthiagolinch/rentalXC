import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ISpecificationsRepositoryDTO } from "../ISpecificationsRepository";


class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationRepository;

    private constructor(){
        this.specifications = []
    }

    public static getInstance(){
        if(!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE
    }

    create({ name, description }: ISpecificationsRepositoryDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description
        })

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }
    list(): Specification[] {
        return this.specifications
    }

}

export { SpecificationRepository }