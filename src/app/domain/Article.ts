export class Article {
    constructor(
        public title?: string,
        public description?: string,
        public content?: string,
        public url?: string,
        public image?: string,
        public publishedAt?: string,
        public source?: [
            {name?: string},
            {url?: string},
        ],
    ){}
}