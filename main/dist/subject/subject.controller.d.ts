import { SubjectService } from './subject.service';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    all(): Promise<import("./subject.model").subject[]>;
    findOne(id: string): Promise<import("./subject.model").subject>;
    create(body: {
        title: string;
        image: string;
    }): Promise<import("./subject.model").subject>;
    update(id: string, body: {
        title?: string;
        image?: string;
    }): Promise<import("./subject.model").subject>;
    delete(id: string): Promise<void>;
}
