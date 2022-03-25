import { Character } from "./character";
import { Pagination } from "./pagination";

export interface ResponseData {
    results: Character[];
    info: Pagination;
}