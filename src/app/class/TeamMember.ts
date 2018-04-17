export class TEAMMEMBER {
    name: string;
    description: string;
    position: string;
    imgURL: string;
    imgALT: string;

    constructor(
        name: string,
        description: string,
        position: string,
        imgURL: string,
        imgALT: string
    ) {
        this.name = name;
        this.description = description;
        this.position = position;
        this.imgURL = imgURL;
        this.imgALT = imgALT;
    }
}
