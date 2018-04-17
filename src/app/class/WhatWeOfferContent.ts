export class WHATWEOFFERCONTENT {
    title: string;
    description: string;
    imgURL: string;
    imgALT: string;
    quote: string;
    quoteAuthor: string;
    moreContent: string[];

    constructor(
        title: string,
        description: string,
        imgURL: string,
        imgALT: string,
        quote: string,
        quoteAuthor: string,
        moreContent: string[]
    ) {
       this.title = title;
       this.description = description;
       this.imgURL = imgURL;
       this.imgALT = imgALT;
       this.quote = quote;
       this.quoteAuthor = quoteAuthor;
       this.moreContent = moreContent;
    }
}
