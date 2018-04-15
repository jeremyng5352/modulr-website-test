export class NEWSARTICLE {
    title: string;
    date: string;
    imgURL: string;
    imgALT: string;

    constructor(
        title: string,
        date: string,
        imgURL: string,
        imgALT: string
    ) {
       this.title = title;
       this.date = date;
       this.imgURL = imgURL;
       this.imgALT = imgALT;
    }
}
