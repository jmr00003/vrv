export class ShowItemModel {
    thumbnail: string;
    poster: string;
    title: string;
    type: string;
    language: string;

    constructor(thumbnail: string, poster: string, title: string, type: string, language: string){
        this.thumbnail = thumbnail;
        this.poster = poster;
        this.title = title;
        this.type = type;
        this.language = language;
    }
}