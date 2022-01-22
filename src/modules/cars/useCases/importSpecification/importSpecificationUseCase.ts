import fs from 'fs';
import {parse as csvParse} from 'csv-parse'

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IImportSpecification {
    name: string;
    description: string;
}

class ImportSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationsRepository){};

    loadImportSpecification(file: Express.Multer.File): Promise<IImportSpecification[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const specifications: IImportSpecification[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile)

            parseFile.on("data", (line) =>{
                const [name, description] = line;

                specifications.push({
                    name,
                    description
                })
            }).on("end", () => {
                resolve(specifications)
            }).on("error", (err) => {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File) {
        const specifications = await this.loadImportSpecification(file)
        
        specifications.map(async (specification) => {
            const {name, description} = specification;
            const existsSpecification = this.specificationRepository.findByName(name);

            if(!existsSpecification) {
                this.specificationRepository.create({name, description})
            }
        })
    }
}

export {ImportSpecificationUseCase}