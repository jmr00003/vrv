export class FirstEpisodeModel {
    thumbnail: string;
    title: string;
    episode: string;
    description: string;
    type: string;
    language: string;
    comments: string;
    time: number;

    constructor(thumbnail: string, title: string, episode: string, description: string, type: string, language: string, comments: string, time:number){
        this.thumbnail = thumbnail;
        this.title = title;
        this.episode = episode;
        this.description = description;
        this.type = type;
        this.language = language;
        this.comments = comments;
        this.time = time;
    }
}