export class ShowItemModel {
    thumbnail: string;
    poster: string;
    title: string;
    type: string;
    language: string;
    logo: string;
    route: string;

    constructor(thumbnail: string, poster: string, title: string, type: string, language: string, logo: string, route: string){
        this.thumbnail = thumbnail;
        this.poster = poster;
        this.title = title;
        this.type = type;
        this.language = language;
        this.logo = logo;
        this.route = route;
    }
}