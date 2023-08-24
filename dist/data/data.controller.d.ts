import { RecordsService } from './data.service';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    createOrUpdate(record: {
        id: number;
        name: string;
    }): Promise<any>;
}
