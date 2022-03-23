import { results } from "./results";

export interface apiobject{
    page?: number,
    results?: results[],
    total_pages?: number,
    total_results?: number,
}