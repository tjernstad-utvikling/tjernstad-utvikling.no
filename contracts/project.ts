export interface ProjectInterface {
    _id: string;

    author: string;
    body: Array<any>;
    mainImage: mainImage;
    publishedAt: string;
    slug: string;
    title: string;
    technologies: Array<string>;
}

export enum blockType {
    reference = 'reference',
    image = 'image'
}
export enum documentType {
    project = 'project'
}

export interface mainImage {
    _type: blockType.image;
    asset: {
        _ref: string;
        _type: blockType.reference;
    };
    caption: string;
}
