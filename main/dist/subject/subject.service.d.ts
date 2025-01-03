import { Model } from 'mongoose';
import { subject, subjectDocument } from './subject.model';
export declare class SubjectService {
    private readonly subjectmodel;
    constructor(subjectmodel: Model<subjectDocument>);
    all(): Promise<subject[]>;
    findOneById(id: number): Promise<subject>;
    create(data: Partial<subject>): Promise<subject>;
    update(id: number, data: Partial<subject>): Promise<subject>;
    delete(id: number): Promise<void>;
}
