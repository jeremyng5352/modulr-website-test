export class WHATWEOFFERCONTENT {
    className: string;
    title: string;
    description: string;
    imgURL: string;
    imgALT: string;
    quote: string;
    quoteAuthor: string;
    moreContent: string[];

    constructor(
        className: string,
        title: string,
        description: string,
        imgURL: string,
        imgALT: string,
        quote: string,
        quoteAuthor: string,
        moreContent: string[]
    ) {
        this.className = className;
       this.title = title;
       this.description = description;
       this.imgURL = imgURL;
       this.imgALT = imgALT;
       this.quote = quote;
       this.quoteAuthor = quoteAuthor;
       this.moreContent = moreContent;
    }
}
