import { Article } from "./Article";

export class SearchResult {
    constructor (
        public totalArticles?: number,
        public articles?: Article[]
    ){}
}