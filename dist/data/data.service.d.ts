export declare class RecordsService {
    private jsonServerUrl;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    createOrUpdate(record: {
        id: number;
        name: string;
    }): Promise<any>;
}
