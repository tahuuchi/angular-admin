import { IError } from './IError';

export interface IResponse {
    data: any | IError;
    message: string;
    error: number;
    status?: number;
}
